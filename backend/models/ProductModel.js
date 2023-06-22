/*
->This file defines a product schema using the Mongoose library for MongoDB
->The schema defines the structure of the data that will be stored in the database for a product
-> The Price field is designed to take a priceID string generated from stripe portal

JS 06/may/2023
*/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["product", "course"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    priceId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
