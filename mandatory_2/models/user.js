const { DataTypes, Model } = require("sequelize");

class User extends Model {
    static init(sequelize){

        const structure = {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        };

        super.init(structure, {modelName: "user", sequelize})
    }
}

module.exports = User
