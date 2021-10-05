const { MongoMemoryServer } = require('mongodb-memory-server');
const fs = require("fs");
const { MongoClient } = require('mongodb');


module.exports.connect = async (dbName) => {
    const mongo = await MongoMemoryServer.create();

    const uri = mongo.getUri();
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("pages");
    await collection.insertMany(JSON.parse( fs.readFileSync("server/database.json") ));
    
    console.log(`Connected to mongodb on ${uri}`);

    return client;
}

