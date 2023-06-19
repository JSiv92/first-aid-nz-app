// routes/price.js
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.get("/convert-price/:price", async (req, res) => {
  try {
    const priceID = req.params.price;
    const price = await stripe.prices.retrieve(priceID);
    const convertedPrice = price.unit_amount / 100; // Assuming the price is in cents

    res.json({ convertedPrice });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to convert price." });
  }
});

module.exports = router;
