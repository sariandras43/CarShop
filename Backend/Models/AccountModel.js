const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Account', accountSchema,'accounts');