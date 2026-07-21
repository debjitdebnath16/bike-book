const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    bikeName: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    pickupDate: {
        type: Date,
        required: true
    },

    returnDate: {
        type: Date,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Booking", bookingSchema);