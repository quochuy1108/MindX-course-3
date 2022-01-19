const express = require("express");

const studentRouter = require("./students");
const classesRouter = require("./classes");

const app = express();

// Resource
const classes = [
  { code: "web_d05", name: "Web D05", subject: "Web" },
  { code: "ci_05", name: "CI_05", subject: "Code Intensive" },
  { code: "ci_06", name: "CI_06", subject: "Code Intensive" },
];

app.use(express.json());
app.use((req, res, next) => {
  console.log("New request comes at " + new Date());
  next();
});

app.use("/students", studentRouter);
app.use("/classes", classesRouter);

app.listen(3000, () => {
  console.log("App is running at 3000");
});
