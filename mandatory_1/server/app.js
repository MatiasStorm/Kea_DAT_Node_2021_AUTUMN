const path = require('path');
const express = require('express');
const dbHandler =  require('./db-handler');



const app = express();
const port = 3000;


// API endpoints

async function dbTest() {
    const client = await dbHandler.connect();
    console.log(client);
    const db = client.db("test");
    const collection = db.collection("documents");
    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    console.log('Inserted documents =>', insertResult);
}



// Compiled frontend (Has to be last)
app.use(express.static('public'));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/build/bundle.js"));
})

app.listen(port, () => {
    console.log("Website hosted at http://localhost:3000");
})

dbTest();
