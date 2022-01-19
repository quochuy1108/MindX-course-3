const products = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
]

// Write an express application
// 

const express = require('express');
const chalk = require('chalk');


const app = express();

// Server side rendering - SSR
app.get('/html', (req, res) => {
    res.set('Content-Type', 'text/html');
    let productsStr = '<ul>';
    products.forEach((p) => {
        productsStr += `<li>${p.name}</li>`
    })
    productsStr += '</ul>';

    const html = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My first website</title>
          </head>
          <body>
            <h1>Hello</h1>
            <h2>This is my first website from Web D05</h2>
            <img src="http://localhost:5000/images/test.jpg" alt="" />
            ${productsStr}
          </body>
        </html>
        `
    res.send(html)
});


app.get("/json", (req, res) => {
    res.json(products)
})

app.listen(5000, () => {
    console.log(chalk.green('App is running at 5000'));
})