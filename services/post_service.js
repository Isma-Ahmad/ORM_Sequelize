const  Posts  = require("../models/post");

class PostService {
  async getPost() {
    return await Posts.findAll();
  }

  async getPostById(id) {
    return await Posts.findByPk(id);
  }

  async getPostByUserId(userId) {
    return await Posts.findAll({
      where: { user_id: userId },
    });
  }

  async createPost(user_id, title, posts) {
    return await Posts.create({ user_id, title, posts });
  }

  async updatePost(id, title, posts) {
    return await Posts.update(
      { title, posts },
      {
        where: { id },
      }
    );
  }

  async deletePost(id) {
    return await Posts.destroy({
      where: { id },
    });
  }
}

module.exports = PostService;