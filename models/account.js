const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const accountSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
});

accountSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();

  const account = this;
  bcrypt.hash(account.password, 10, (error, hash) => {
    if (error) return next(error);

    account.password = hash;
    next();
  });
});

module.exports = mongoose.model('Account', accountSchema);
