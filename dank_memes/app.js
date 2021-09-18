const fs = require("fs");
const app = require("express")();
const port = 3000;


function getDatabase(){
    return JSON.parse( fs.readFileSync("data.json") )
}

app.get("/memes", (req, res) => {
    res.send(getDatabase().memes.rows);
})

app.get("/memes/:id", (req, res) => {
    const id = Number(req.params.id);
    const memeQuery = getDatabase().memes.rows.filter( m => m.id === id )
    if ( memeQuery.length === 0 ) {
        res.statusCode = 404;
        res.send("<h1>404 - Not Found</h1>");
        return;
    }
    res.send(memeQuery[0]);
})



app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

