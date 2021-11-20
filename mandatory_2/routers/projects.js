const router = require("express").Router();
const middleware = require("../middleware.js");

const projects = [
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Nodefolio", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Adventure XP", category: "Java", technologies: ["Java", "Thymeleaf", "CSS", "MySQL"] }
];


router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

router.post("/api/projects", middleware.authenticateToken, (req, res) => {
    res.statusCode(204);
});

router.patch("/api/projects/{id}", middleware.authenticateToken, (req, res) => {
    res.statusCode(204);
});

router.delete("/api/projects/{id}", middleware.authenticateToken, (req, res) => {
    res.statusCode(204);
});

module.exports = {
    router
};
