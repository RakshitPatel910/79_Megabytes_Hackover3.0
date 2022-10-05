const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    organizerId: String,
    eventName: String,
    location: String,
    date: Date,
    seat: Number,
    availSeat: Number,
    image: String,
    price: Number,
    approved: Boolean,
    like:[String]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
