const express = require("express");
const Booking = require("../models/Booking");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      message: "Booking Successful",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while booking",
      error,
    });
  }
});

module.exports = router;