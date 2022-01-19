const express = require('express');
const logger = require('../middleware/logger')
const authentication = require('../middleware/auth')
const router = express.Router();

const students = [
    { id: 1, name: 'Bob', age: 20 },
    { id: 2, name: 'Zed', age: 22 },
    { id: 3, name: 'Yasuo', age: 24 },
]


router.get('/', logger, authentication, (req, res) => {
    console.log("Req at" + new Date());
    res.json(students)
})
router.get('/:id', logger, (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id))
    res.json(student)
})
router.post('/', () => { })
router.put('/:id', () => { })
router.delete('/:id', () => { })

module.exports = router;