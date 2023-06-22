/*
->This code exports several endpoints to use in routing to handle 
  HTTP requests and CRUD operations for shop and course products. 
*/

const mongoose = require("mongoose");
const Product = require("../models/ProductModel");

//GET all products (both courses and products - filter in react)
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });

  //send all products as json to client
  res.status(200).json(products);
};

//GET single product
const getProduct = async (req, res) => {
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }

  const product = await Product.findById(id);

  //if no matching product:
  if (!product) {
    return res.status(404).json({ error: "No product exists" });
  }

  res.status(200).json(product);
};

//CREATE new product
const createProduct = async (req, res) => {
  //get attributes from request body:
  const { type, name, price, imageUrl, description, date, location, priceId } =
    req.body;

  //add 'doc' to db:
  try {
    // Check if type is explicitly set to 'product' or 'course'
    const validTypes = ["product", "course"];
    const productType = validTypes.includes(type) ? type : "product"; //set to type course otherwise product

    const product = await Product.create({
      type: productType,
      name,
      price,
      imageUrl,
      description,
      date,
      location,
      priceId,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE product
const updateProduct = async (req, res) => {
  //get id of product to update
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      //get all properties to update from body with '...':
      ...req.body,
    },
    { new: true } //respond with updated doc
  );

  //if id didnt match anything in db
  if (!product) {
    return res.status(404).json({ error: "Product to update is not found" });
  }

  res.status(200).json(product);
};

//DELETE product by id
const deleteProduct = async (req, res) => {
  //get id from body:
  const { id } = req.params;

  //check id is valid:
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid ID" });
  }

  //delete object (note id is called '_id' in mongodb)
  const product = await Product.findOneAndDelete({ _id: id });

  //if id didnt match anything in db
  if (!product) {
    return res.status(404).json({ error: "Product to delete is not found" });
  }

  //if successfully deleted:
  res.status(200).json(product);
};

//export modules to use in routing
module.exports = {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
};
