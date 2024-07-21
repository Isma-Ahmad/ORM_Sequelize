
const  {User} = require("../models/user.js");

const {Posts} = require("../models/post.js");
// const sequelize = require("../models/sequelize.js")
// const { DataTypes } = require("sequelize");


class UserService {
  async getUser() {
    return await User.findAll({
      include: Posts,
    });
  }

  async getUserById(id) {
    return await User.findByPk(id, {
      include: Posts,
    });
  }

  async getpostByUser(userId) {
    return await Posts.findAll({
      where: { user_id: userId },
    });
  }

  async createUser(name) {
    return await User.create({name});
  }

  async updateUser(id, name) {
    return await User.update(
      { name },
      {
        where: { id },
      }
    );
  }

  async deleteUser(id) {
    return await User.destroy({
      where: { id },
    });
  }
}

module.exports = UserService;