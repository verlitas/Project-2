module.exports = function (sequelize, DataTypes) {
    const post = sequelize.define("post", {
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
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    post.associate = function (models) {
        models.post.hasMany(models.comment, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return post;
};