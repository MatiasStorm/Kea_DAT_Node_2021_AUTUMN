const {User} = require("../models");
const { Op } = require("sequelize");
const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.post("/api/admin", async (req, res) => {
    const body = req.body;
    const user = await User.findOne({
        where: {
            [Op.and]: [ 
                { username: body.username },
                { password: body.password } 
            ]
        }
    });
    if(user){
        const accessToken =  jwt.sign(user.username, process.env.ACCESS_TOKEN_SECRET);
        res.cookie("auth", "Baerer " + accessToken, {
            httpOnly: true,
        })
        res.redirect(301, "/admin/dashboard");
        return res.send();
    }
    res.status(401);
    res.send();
});


module.exports = router;
