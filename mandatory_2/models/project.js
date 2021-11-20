const { DataTypes, Model } = require("sequelize");
let Technology = require("./technology.js");

class Project extends Model {
    static init(sequelize){

        const structure = {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false
            }
        };

        super.init(structure, {modelName: "project", sequelize});
    }

    static associate(models){
        Project.belongsToMany(models.Technology, { through: "project_technologies" });
    }
}

module.exports = Project
