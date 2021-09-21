const express = require("express");
const app = express();


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/getDay", (req, res) => {
    const date = new Date();
    const wantDate = true;

    if (wantDate) {
        return res.send({ day: new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date) });
    }

    res.send({ day: days[date.getDay()] });
});

app.listen(8080);