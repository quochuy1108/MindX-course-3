const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:27017"

const client = new MongoClient(url);
const db = {}


const connectToMongo = async () => {
    await client.connect();
    console.log("DB connected");
    const database = client.db("webd05")
    db.students = database.collection("students")
}

module.exports = { connectToMongo, db }
