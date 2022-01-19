const express = require("express");
const AuthController = require("../controllers/authController");

const router = express.Router();

/**
 * @payload username, password
 * @return user if matched, else 401
 */
router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await AuthController.login(username, password);
    res.json(user);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

/**
 * @payload username, password
 * @return user, else 401/404
 */
router.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const users = await AuthController.register(username, password);
    res.json(users);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = router;
