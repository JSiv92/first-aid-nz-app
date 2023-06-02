/*
->This file defines a product schema using the Mongoose library for MongoDB
->The schema defines the structure of the data that will be stored in the database for the user posts

JS 2/June/2023
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
