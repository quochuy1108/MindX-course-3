const express = require('express');
const { db } = require('../database')

const router = express.Router();

router.get("/", async (req, res) => {
    const students = await db.students.find({ age: 20, name: "Alice" }).toArray();
    res.json(students)
})

module.exports = router