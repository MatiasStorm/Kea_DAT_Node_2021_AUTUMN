const router = require("express").Router();


router.post("/api/admin", (req, res) => {
    const body = req.body;
    console.log(req);
    if(body.username == "admin" && body.password == "password"){
        res.redirect(301, "/admin/dashboard");
        res.send();
        return;
    }
    res.status(401);
    res.send();
});


module.exports = {
    router
};
