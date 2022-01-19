const express = require("express");
const { db } = require("../database");
const router = express.Router();

router.get("/", async (req, res) => {
  const students = await db.students
    .find({ age: 21, name: "Alice" })
    .project({})
    .sort({})
    .skip(0)
    .limit(1)
    .toArray();
  res.json(students);
});

module.exports = router;
