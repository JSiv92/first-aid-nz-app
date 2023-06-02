//routes for Posts

// GET /Posts -> get all Posts
// POST /Posts -> add a Post
// GET /Posts/:id -> get single Post by id
// DELETE /Posts/:id -> delete single Post by id

const express = require("express");

//import controllers
const {
  createPost,
  getPost,
  getPosts,
  deletePost,
} = require("../controllers/postController");

//express router
const router = express.Router();

/*----------------------------
        Post ROUTES
------------------------------*/

//get all Posts
router.get("/posts", getPosts);

//get single Post by id
router.get("/posts/:id", getPost);

//post a new Post
router.post("/posts", createPost);

//delete a Post by id
router.delete("/posts/:id", deletePost);

module.exports = router;
