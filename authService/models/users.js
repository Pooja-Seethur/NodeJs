/**
 * Create user model
 */

const mongoose = require('mongoose');

const user = mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', user);
