const mongoose = require("mongoose");

const custSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  eventList: [
    {
      eventId: String,
      date: Date,
    },
  ],
});

const Customer = mongoose.model('Customer', custSchema);

module.exports = Customer;
