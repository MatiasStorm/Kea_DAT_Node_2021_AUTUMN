const router = require("express").Router();
const middleware = require("../middleware.js");
const { Project, Technology } =  require( "../models" );
const { Op } = require("sequelize");

router.get("/api/projects", async (req, res) => {
    const projects = await Project.findAll({
        include: [
            Technology
        ]
    });
    res.json(projects);
});


router.get("/api/projects/:id", async (req, res) => {
    const projects = await Project.findOne({
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
    let project = await Project.create(req.body)

    project.dataValues.technologies = [];
    let technology;
    for(let t of req.body.technologies){
        technology = await Technology.findOne({ where: {[Op.or]: [ {id: t.id || -1}, {name: t.name} ] }});
        if(!technology){
            technology = await Technology.create(t);
        }
        await project.addTechnology(technology);
        project.dataValues.technologies.push(technology);
    }

    res.statusCode = 201;
    res.json(project);
});

router.put("/api/projects/:id", async (req, res) => {
    const project = await Project.findOne({where: {id: req.params.id}, include: [ Technology ]});

    if(!project){
        res.statusCode = 404;
        return res.send();
    }

    let technology;
    let technologies = []
    for(let existingTechnology of project.technologies){
        index = req.body.technologies.findIndex(t => t.id == existingTechnology.id);
        if(index != -1){
            technologies.push(existingTechnology);
        }
        else {
            project.removeTechnology(existingTechnology);
        }
    }

    for(let t of req.body.technologies){
        technology = await Technology.findOne({ where: {[Op.or]: [ {id: t.id || -1}, {name: t.name} ] }});
        if(!technology){
            technology = await Technology.create(t);
        }
        await project.addTechnology(technology);
        technologies.push(technology);
    }

    req.body.technologies = technologies;

    await project.update(req.body);

    res.statusCode = 201;
    res.json(project);
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
