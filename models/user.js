module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
  );
  user.associate = function (models) {
    models.user.hasMany(models.post, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return user;
};
