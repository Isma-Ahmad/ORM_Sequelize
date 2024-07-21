
const PostService = require("../services/post_service.js");


class PostController {
  constructor() {
    this.PostService = new PostService();
  }

  async getPost(req, res) {
    const data = await this.PostService.getPost();
    res.json(data);
  }

  async getPostByUserId(req, res) {
    const { user_id } = req.params;
    const data = await this.PostService.getPostByUserId(user_id);
    res.json(data);
  }

  async getPostById(req, res) {
    const { id } = req.params;
    const data = await this.PostService.getPostById(id);
    res.json(data);
  }

  async createPost(req, res) {
    const { user_id, title, posts } = req.body;
    await this.PostService.createPost(user_id, title, posts);
    res.json("POST HAS BEEN ADDED");
  }

  async updatePost(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;
    await this.PostService.updatePost(id, title, content);
    res.json("POST UPDATED");
  }

  async deletePost(req, res) {
    const { id } = req.params;
    await this.PostService.deletePost(id);
    res.send("BLOG DATA DELETED SUCCESSFULLY");
  }
}

module.exports = new PostController();