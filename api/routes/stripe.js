const { response } = require("express");

const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "naira",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        response.status(500).json(stripeErr);
      } else {
        response.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
