const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
});

module.exports = mongoose.model('Account', accountSchema);
