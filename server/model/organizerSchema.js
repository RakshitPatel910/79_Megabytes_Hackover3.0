const mongoose = require("mongoose");

const orgSchema = new mongoose.Schema({
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
  adhaar: String,
});

const Organizer = mongoose.model('Organizer', orgSchema);

module.exports = Organizer;
