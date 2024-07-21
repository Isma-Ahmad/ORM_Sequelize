module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("posts", {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
     
    }
  );
    return Posts;
  };