//routes for Products

// GET /products --> get all products
// POST /products --> add a product
// GET /products/:id --> get single product by id
// DELETE /products/:id --> delete single product by id
// PATCH /products/:id --> update single product by id

const express = require("express");

//import controllers
const {
  createProduct,
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

//express router
const router = express.Router();

/*----------------------------
        PRODUCT ROUTES
------------------------------*/

//get all products
router.get("/products", getProducts);

//get single product by id
router.get("products/:id", getProduct);

//post a new product
router.post("/products", createProduct);

//delete a product by id
router.delete("products/:id", deleteProduct);

//update a product
router.patch("products/:id", updateProduct);

module.exports = router;
