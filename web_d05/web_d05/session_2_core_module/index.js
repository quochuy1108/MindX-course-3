const myMath = require("./myMath");
const fs = require("fs");
const http = require("http");
const chalk = require("chalk");

console.log(myMath.sum(1, 2));
fs.readFile("./hello.txt", "utf8", (err, data) => {
  if (!err) {
    console.log(chalk.blue(data));
  }
});

const server = http.createServer((req, res) => {
  console.log("New request coming!");
  fs.readFile("./index.html", "utf8", (err, data) => {
    if (!err) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(5000, () => {
  console.log("Server is running at 5000");
});
