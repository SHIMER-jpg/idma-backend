const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  images: [{ type: String }],
  materials: [
    {
      materialId: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
      amountNeeded: { type: Number, required: true },
    },
  ],
  dataSheet: { type: String },
  cost: { type: Number },
  attributes: [{ type: String }],
  published: { type: Boolean, required: true },
  variants: [
    {
      id: { type: Number },
      price: { type: String },
      values: [
        {
          lang: { type: String },
          value: { type: String },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
