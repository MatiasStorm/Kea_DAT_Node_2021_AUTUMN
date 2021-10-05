const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');


module.exports.connect = async () => {
    const mongo = await MongoMemoryServer.create();

    const uri = mongo.getUri();
    const client = new MongoClient(uri);
    await  client.connect();
    
    console.log(`Connected to mongodb on ${uri}`);

    return client;
}

