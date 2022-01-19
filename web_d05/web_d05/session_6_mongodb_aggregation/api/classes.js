const express = require("express");
const ClassController = require("../controllers/classController");
const router = express.Router();

router.get("/", async (req, res) => {
  const classes = await ClassController.getAllClassesWithTeacher();
  res.json(classes);
});

module.exports = router;
