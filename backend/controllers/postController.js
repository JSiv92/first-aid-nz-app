/*
->This code exports several modules to use in routing to handle 
  HTTP requests and CRUD operations for the user message board. 

JS 02/june/2023
*/

const mongoose = require("mongoose");
const Post = require("../models/PostModel");

//GET all posts sorted by creation date in descending order
const getPosts = async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });

  //send all posts as json to client
  res.status(200).json(posts);
};

//GET single post
const getPost = async (req, res) => {
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "id is not valid" });
  }

  const post = await Post.findById(id);

  //if no matching post:
  if (!post) {
    return res.status(404).json({ error: "error no post with that id found" });
  }

  res.status(200).json(post);
};

//CREATE new post
const createPost = async (req, res) => {
  //get attributes from request body:
  const { author, message, course } = req.body;

  //add 'doc' to db:
  try {
    const post = await Post.create({
      author,
      message,
      course,
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE post by id
const deletePost = async (req, res) => {
  //get id from body:
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }

  //delete object (note id is called '_id' in mongodb)
  const post = await Post.findOneAndDelete({ _id: id });

  //if id didnt match anything in db
  if (!post) {
    return res.status(404).json({ error: "Post to delete is not found" });
  }

  //if successfully deleted:
  res.status(200).json(post);
};

//export modules to use in routing
module.exports = {
  createPost,
  getPosts,
  getPost,
  deletePost,
};
