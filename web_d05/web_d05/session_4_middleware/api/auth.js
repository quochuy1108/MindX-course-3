const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const users = [
  { id: 1, username: "alice", password: "123456" },
  { id: 2, username: "bob", password: "123456" },
];

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    res.status(401).send("Username or password is not correct!");
    return;
  }

  // Generate token
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    "MY_SECRET_KEY",
    {
      expiresIn: 5 * 60,
    }
  );
  res.json({
    username: user.username,
    token: token,
  });
});
router.post("/register", () => {});

module.exports = router;
