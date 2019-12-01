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
        }
    });

    comment.associate = function (models) {
        //belongsToMany??
        //needs to belongTo models.post as well...
        models.comment.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return comment;
};