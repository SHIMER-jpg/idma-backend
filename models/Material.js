const mongoose = require("mongoose");
const { Schema } = mongoose;

//THIS SHOULD BE TO KEEP STOCK
const materialSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  details: { type: String, required: true },
  quantityAvailable: { type: Number, required: true },
  averagePrice: { type: Number, required: true },
  materialHistory: [
    {
      date: { type: Date, default: Date.now },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

module.exports = new mongoose.model("Material", materialSchema);
