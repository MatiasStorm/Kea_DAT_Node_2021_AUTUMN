
const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.post("/api/admin", (req, res) => {
    const body = req.body;
    if(body.username == "admin" && body.password == "password"){
        const accessToken =  jwt.sign(body.username, process.env.ACCESS_TOKEN_SECRET);
        res.cookie("auth", "Baerer " + accessToken, {
            httpOnly: true,
        })
        res.redirect(301, "/admin/dashboard");
        return res.send();
    }
    res.status(401);
    res.send();
});


module.exports = {
    router
};
