const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  name: { type: String, required: true },
  make: { type: String, required: true },
  manufacture_year: { type: Number, required: true },
  condition: { type: String, required: true },
  doors: { type: Number, required: true },
  performance: { type: Number, required: true },
  odometer: { type: Number, required: true },
  weight: { type: Number, required: true },
  color: { type: String, required: true },
  active: { type: Boolean, default: true },
  description: { type: String }
});

module.exports = mongoose.model('Car', carSchema,'cars');