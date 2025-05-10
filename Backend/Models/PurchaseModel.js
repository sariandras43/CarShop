const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  car_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }
});

module.exports = mongoose.model('Purchase', purchaseSchema);