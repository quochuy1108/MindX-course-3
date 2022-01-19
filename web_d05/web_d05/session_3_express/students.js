const express = require("express");
const router = express.Router();

let students = [
  { id: 1, name: "Alice", age: 22 },
  { id: 2, name: "Bob", age: 20 },
];

router.get("/", (req, res) => {
  console.log(req.query);
  res.json(students);
});

router.post("/", (req, res) => {
  const newStudent = {
    name: req.body.name,
    age: req.body.age,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

router.put("/:id", (req, res) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === Number(req.params.id)) {
      students[i].age = req.body.age;
      res.json(students[i]);
      return;
    }
  }
});

router.delete("/:id", (req, res) => {
  students = students.filter((s) => s.id != req.params.id);
  res.send("Deleted");
});

module.exports = router;
