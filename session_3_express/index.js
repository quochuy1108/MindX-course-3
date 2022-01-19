const express = require('express');

const studentRouter = require('./students')
const app = express();

// Resource

const classes = [
    { id: 1, code: "web_d05", name: "Web D05", subject: "Web" },
    { id: 2, code: "web_d06", name: "Web D06", subject: "Code Intensive" },
    { id: 3, code: "web_d07", name: "Web D07", subject: "Code Intensive" },
]

app.use(express.json())
app.use("/students", studentRouter)

// // Read
// app.get('/students', (req, res) => {
//     // console.log(req.query);
//     res.json(students)
// })

// // Create
// app.post('/students', (req, res) => {
//     const newStudent = {
//         name: req.body.name,
//         age: req.body.age,
//     }
//     // console.log(req.body);
//     students.push(newStudent)

//     res.status(201).json(newStudent)
// })

// // Update
// app.put('/students/:id', (req, res) => {
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].id === Number(req.params.id)) {
//             students[i].age = req.body.age;
//             res.json(students[i]);
//             return
//         }
//     }
// })

// // Delete
// app.delete('/students/:id', (req, res) => {
//     students = students.filter((s) => s.id != req.params.id)
//     res.send("Deleted")
// })


// ---------------------------------------
app.get('/classes', (req, res) => {
    console.log(req.query);
    res.json(classes)
})

// Add
app.post('/classes', (req, res) => {
    const newClass = {
        code: req.body.code,
        name: req.body.name,
        subject: req.body.subject,
    }
    console.log(req.body);
    classes.push(newClass)

    res.status(201).json(newClass)
})

// update
app.put('/classes/:id', (req, res) => {
    for (let i = 0; i < classes.length; i++) {
        if (classes[i].id === Number(req.params.id)) {
            classes[i].subject = req.body.subject;
            res.json(classes[i]);
            return
        }
    }
})

// Delete
app.delete('/classes/:id', (req, res) => {
    classes = classes.filter((s) => s.id != req.params.id)
    res.send("Deleted")
})

app.listen(3000, () => {
    console.log("App is running at port 3000");
})