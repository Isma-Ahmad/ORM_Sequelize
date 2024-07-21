const UserService = require("../services/user_service.js");

class UserController {
  constructor() {
    this.userService = new UserService();
    this.createUser = this.createUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  async getUser(req, res) {
    const data = await this.userService.getUser();
    res.json(data);
  }

  async getpostByUser(req, res) {
    const { users_id } = req.params;
    const data = await this.userService.getpostByUser(users_id);
    res.json(data);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const data = await this.userService.getUserById(id);
    res.json(data);
  }

  async createUser(req, res) {
    const { name } = req.body;
    await this.userService.createUser(name);
    res.json("User HAS BEEN ADDED");
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    await this.userService.updateUser(id, name);
    res.json("USER UPDATED");
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await this.userService.deleteUser(id);
    res.send("USER DATA DELETED SUCCESSFULLY");
  }
}

module.exports = new UserController();