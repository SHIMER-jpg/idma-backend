const mongoose = require("mongoose");
const { Schema } = mongoose;

const departureSchema = new Schema({
  creationDate: { type: Date, default: Date.now },
  producerId: { type: Schema.Types.ObjectId, ref: "Producer" },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  total_cost: { type: Number, default: 0 },
});

module.exports = mongoose.model("Departure", departureSchema);
