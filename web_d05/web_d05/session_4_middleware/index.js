const express = require("express");

const router = require("./api");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.use(router);

app.listen(3000, () => {
  console.log("App is running at 3000!");
});
