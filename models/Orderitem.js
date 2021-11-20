const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderitemSchema = new Schema({
  orderId: { type: Number, required: true },
  productId: { type: Number, required: true },
  producerId: { type: Schema.Types.ObjectId, ref: "Producer" },
  departureId: { type: Schema.Types.ObjectId, ref: "Departure" },
  status: {
    type: String,
    enum: ["Pending", "Assigned", "Received"],
    required: true,
  },
  clientId: { type: Number, required: true },
  clientName: { type: String, required: true },
  note: { type: String },
});

module.exports = mongoose.model("Orderitem", orderitemSchema);
