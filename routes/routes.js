const express = require("express");
const userController = require("../controller/user_controller.js");
const postController = require("../controller/post_controller.js");

const router = express.Router();

// User Routes
router.get("/user", userController.getUser);
router.get("/user/:id", userController.getUserById);
router.get("/user/:user_id/Post", userController.getpostByUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

// post Routes
router.get("/posts", postController.getPost);
router.get("/posts/:id", postController.getPostById);
router.get("/posts/user/:user_id", postController.getPostByUserId);
router.post("/posts", postController.createPost);
router.put("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

module.exports = router;