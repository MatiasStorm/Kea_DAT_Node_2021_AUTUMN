const app = require("express")();
const port = 3000;


app.get("/time", (req, res) => {
    const date = new Date();
    res.send(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
})


app.get("/weekday", (req, res) => {
    const date = new Date();
    let day;
    switch (date.getDay()){
        case 0:
            day = "Søndag";
            break;
        case 1:
            day = "Mandag";
            break;
        case 2:
            day = "Tirsdag";
            break;
        case 3:
            day = "Onsdag";
            break;
        case 4:
            day = "Torsdag";
            break;
        case 5:
            day = "Fredag";
            break;
        case 6:
            day = "Lørdag";
            break;
    }
    res.send(day);
})


app.get("/month", (req, res) => {
    const months = [
        "Januar",
        "Februar",
        "Marts",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "December"
    ]
    const date = new Date();
    const month = date.getMonth();
    res.send(months[month]);
})






app.listen(port, () => console.log(`Listening on url http://localhost:${port}`));
