const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  place: { type: String, required: true },
  opening: { type: [String], required: true }, // pl: ["Mon-Fri 9-17", "Sat 10-14"]
  ratings: { type: [Number], required: true }, // pl: [5, 4, 4, 3]
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Shop', shopSchema,'shops');