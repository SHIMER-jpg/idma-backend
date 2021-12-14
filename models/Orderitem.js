const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderitemSchema = new Schema({
  orderId: { type: Number, required: true },
  number: { type: Number, required: true },
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  producerId: { type: Schema.Types.ObjectId, ref: "Producer" },
  departureId: { type: Schema.Types.ObjectId, ref: "Departure" },
  payment: { type: String },
  size: { type: String },
  color: { type: String },
  storeStatus: { type: String },
  nextAction: { type: String },
  internalStatus: {
    type: String,
    enum: ["Pending", "Assigned", "Received"],
    default: "Pending",
  },
  clientId: { type: Number, required: true },
  clientName: { type: String, required: true },
  note: { type: String },
});

module.exports = mongoose.model("Orderitem", orderitemSchema);
