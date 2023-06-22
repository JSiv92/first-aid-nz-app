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
/*
router.post("/api/create-checkout-session", async (req, res) => {
  const success = process.env.SUCCESS_URL;
  const cancel = process.env.CANCEL_URL;

  const { cartItems } = req.body;
  console.log({ cartItems });

  const lineItems = cartItems.map((item) => ({
    price_data: {
      currency: "nzd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: success,
    cancel_url: cancel,
  });

  res.json({ url: "hi" });
});*/

module.exports = router;
