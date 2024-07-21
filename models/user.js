module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
    }
    );
    return User;
  };