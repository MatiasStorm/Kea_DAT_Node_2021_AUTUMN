const path = require('path');
const express = require('express');
const dbHandler =  require('./db-handler');


async function main(){
    const app = express();
    const port = 3000;

    const dbName = "nodejs";
    const client = await dbHandler.connect(dbName);
    const db = client.db(dbName);

    initializeApiEndpoints(app, db);

    startServer(app, port);
}

function setCommonResponseHeaders(res){
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    return res;
}

// API endpoints
function initializeApiEndpoints(app, db){
    app.get("/api/pages", (req, res) => {
        res = setCommonResponseHeaders(res);

        const collection = db.collection("pages");
        collection.find().toArray()
            .then(results => {
                res.json(results);
            })
    });
}


// Compiled frontend (Has to be last)
function startServer(app, port){
    app.use(express.static('public'));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/public/build/bundle.js"));
    })

    app.listen(port, () => {
        console.log("Website hosted at http://localhost:3000");
    })
}

main();
