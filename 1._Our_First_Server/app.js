const express = require("express");
const app = express();

app.use(express.json());
// const app = require("express")();

const cake = require("./cake.json");
// console.log(cake);

app.get("/", (req, res) => {
    res.send({ mindIsBlown: true });
});

// create a new route on the endpoint "/adventureTime" 
// send back data (data type must be json)
app.get("/adventureTime", (req, res) => {
    res.send({ adventure: "Time" });
});

// create a route on /frontpage that sends back a welcome message
app.get("/frontpage", (req, res) => {
    res.send("<h1 class='fullstack-node.js'>Welcome to the front page. Everything but this route is a pure data API</h1>");
});


// path variable (with Spring syntax below)
// /endpoint/{someValue}
                                // query parameter
// https://www.google.com/search?hl=en&q=search

// given the existing query string 
// ?key=value&name=Tobias&svar=Godt&nicenesslevel=10
// send svar and its value back = respond with svar and its value
app.get("/senddata", (req, res) => {
    console.log(req.query.svar);
    res.send({ svar: req.query.svar });
});

// Create a route on favoriteNumber that through 
// request parameter/path variable gets the number and sends it back to the client
// bonus: tells the client if it's a nice number or not
app.get("/favoritenumber/:favoriteNumber", (req, res) => {
    res.send({ 
        number: req.params.favoriteNumber,
        nice: req.params.favoriteNumber < 5
    });
});

app.post("/messages", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
