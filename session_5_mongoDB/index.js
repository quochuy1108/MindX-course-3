const express = require('express');

const { connectToMongo } = require('./database');

const api = require('./api')

const app = express();


app.use(express.json())
app.use(api)

app.listen(5000, () => {
    console.log("App is running at 5000");
    connectToMongo()
})