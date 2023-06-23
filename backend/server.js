//install express with 'npm install express'

//db variable for products table
const Product = require("./models/ProductModel");
//require dotenv for secrets
require("dotenv").config();

//require the express package
const express = require("express");
//require the mongoose package
const mongoose = require("mongoose");
//stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const success = process.env.SUCCESS_URL;
const cancel = process.env.CANCEL_URL;
//require cors
const cors = require("cors");

//initialise allProducts[] array for stripe
let allProducts = [];
const getProducts = async (req, res) => {
  try {
    // Retrieve products from MongoDB and assign them to allProducts
    allProducts = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//routes in routes directory: eg routes/products.js
const productRoutes = require("./routes/products");
const postRoutes = require("./routes/posts");
const paymentRoutes = require("./routes/payments");

//start express app
const app = express();

//middleware
app.use(express.json()); //to read json
app.use(
  cors({
    origin: "http://localhost:3000",
  })
); //to communicate with frontend

app.use((req, res, next) => {
  //logs path of requests in console
  console.log(req.path, req.method);
  next();
});

//ROUTING: grabs all routes configured in routes folders
app.use("/api/", productRoutes);
app.use("/api/", postRoutes);
app.use("/api/", paymentRoutes);

//stripe
app.post("/create-checkout-session", async (req, res) => {
  const { cartItems } = req.body;
  console.log({ cartItems });
  try {
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["NZ"],
      },
      mode: "payment",
      line_items: req.body.cart.map((item) => {
        const cartItem = allProducts.find(
          (product) => product.name === item.name
        );
        return {
          price_data: {
            currency: "nzd",
            product_data: {
              name: cartItem.name,
            },
            unit_amount: Math.round(cartItem.price * 100),
          },
          quantity: item.qty,
        };
      }),
      phone_number_collection: {
        enabled: true,
      },
      success_url: success,
      cancel_url: cancel,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    ////////print allProducts[] to terminal/////////
    Product.find({})
      .sort({ createdAt: -1 })
      .then((products) => {
        allProducts = products;
        console.log("Products retrieved from MongoDB:", allProducts);
      })
      .catch((error) => {
        console.log("Error retrieving products from MongoDB:", error);
      });
    //////////////////////////////////////////

    //listen for requests using dotenv PORT
    app.listen(process.env.PORT, () => {
      console.log("listening on backend port. mongodb working.");
    });
  })
  .catch((error) => {
    console.log(error);
  });
