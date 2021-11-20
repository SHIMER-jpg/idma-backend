const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const ProductSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  images: [{ type: String }],
  materials: [
    {
      materialId: { type: Schema.Types.ObjectId, ref: "Material" },
      amountNeeded: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
