module.exports = function (sequelize, DataTypes) {
    const comment = sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Anonymous"
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
    comment.associate = function (models) {
        models.comment.belongsTo(models.post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return comment;
};