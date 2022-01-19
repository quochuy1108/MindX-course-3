const express = require("express");
const chalk = require("chalk");
const fs = require("fs");

const app = express();

// Server-side rendering - SSR
app.get("/", (req, res) => {
  fs.readFile("./index.html", "utf8", (err, data) => {
    res.set("Content-Type", "text/html");
    res.send(data);
  });
});

// Client-side rendering - CSR
app.get("/test", (req, res) => {
  res.send("Hello. This is a test message!");
});

app.get("/json", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.use("/images", express.static("images"));

app.listen(5000, () => {
  console.log(chalk.green("App is running at 5000"));
});
