const { Sequelize } = require("sequelize");

let sequelize;
sequelize = new Sequelize({ dialect: 'sqlite', storage: "./database.sqlite" });

// Initialize models
const models = require("../models");
Object.values(models).forEach(model => {
    model.init(sequelize);
})
Object.values(models).forEach(model => {
    if("associate" in model){
        model.associate(models);
    }   
})

sequelize.sync({force: true}).then( () => {
    models.Project.create({
        "name": "Node Folie", 
        "category": "Node.js", 
    }).then( project => {
        models.Technology.create({ name: "Javascript" })
            .then(t => project.addTechnology(t));
    }).then( () => {
        models.Project.create({
            "name": "Python project", 
            "category": "Python", 
        }).then( project => {
            models.Technology.create({ name: "Python" })
                .then(t => project.addTechnology(t));
        });
    }).then(() => {
        models.User.create({
            username: "admin",
            password: "admin"
        })
    })
} )

// test Data


module.exports = {
    sequelize
};
