const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
