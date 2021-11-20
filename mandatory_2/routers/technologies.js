const router = require("express").Router();
const middleware = require("../middleware.js");
const { Technology } =  require( "../models" );

router.get("/api/technologies", async (req, res) => {
    const technologies = await Technology.findAll();
    res.json(technologies);
});

module.exports = router

