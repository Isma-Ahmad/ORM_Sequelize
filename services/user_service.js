
const  User = require("../models/user.js");

const Posts = require("../models/post.js");


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
    try {
        const user = await User.create({ name });
        console.log('User created:', user);
      } catch (error) {
        console.error('Error creating user:', error);
      }
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