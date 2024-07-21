const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("posts", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const User = require("./user.js")(sequelize, DataTypes);
const Posts = require("./post.js")(sequelize, DataTypes);

User.hasMany(Posts, { foreignKey: "user_id" });
Posts.belongsTo(User, { foreignKey: "user_id" });

sequelize.sync();

module.exports = { sequelize, User, Posts };