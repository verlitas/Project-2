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
        }
    });
    post.associate = function (models) {
        models.post.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return post;
};