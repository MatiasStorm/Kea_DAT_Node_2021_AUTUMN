const { DataTypes, Model } = require("sequelize");

class Technology extends Model {
    static init(sequelize){
        const structure = {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        };
        super.init(structure, {modelName: "technology", sequelize})
    }

    static associate(models){
        Technology.belongsToMany(models.Project, { through: "project_technologies" });
    }
}

module.exports = Technology
