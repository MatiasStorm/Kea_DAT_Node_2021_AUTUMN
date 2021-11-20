const router = require("express").Router();
const middleware = require("../middleware.js");
const { Project, Technology } =  require( "../models" );

const projects = [
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Nodefolio", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Adventure XP", category: "Java", technologies: ["Java", "Thymeleaf", "CSS", "MySQL"] }
];

router.get("/api/projects", async (req, res) => {
    const projects = await Project.findAll({
        include: [
            Technology
        ]
    });
    res.json(projects);
});


router.get("/api/projects/:id", async (req, res) => {
    const projects = await Project.findAll({
        include: [
            Technology
        ],
        where: {
            id: req.params.id
        }
    });
    res.json(projects);
});

router.post("/api/projects", async (req, res) => {
    const project = await Project.create(
        req.body, {
            include: [
                Technology
            ]
        }
    );
    res.statusCode = 201;
    res.json(project);
});

router.put("/api/projects/:id", (req, res) => {
    res.statusCode(201);
});

router.delete("/api/projects/:id", async (req, res) => {
    await Project.destroy({
        where: {
            id: req.params.id
        }
    });

    res.statusCode = 204;
    res.send();
});

module.exports = router;
