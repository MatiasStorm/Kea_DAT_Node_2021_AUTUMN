const path = require('path');

const app = require("express")();
const port = 3000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/public/build/bundle.js"));
})







app.listen(port, () => {
    console.log("Website hosted at http://localhost:3000");
})
