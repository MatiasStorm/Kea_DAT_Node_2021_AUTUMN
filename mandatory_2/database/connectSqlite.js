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

sequelize.sync({force: true});

// (async () => {
//     try{
//         await sequelize.authenticate();
//         console.log("Successfully connected to database");
//     }
//     catch (error){
//         console.error("Unable to connect to database");
//     }
// })();

module.exports = {
    sequelize
};
