const mongoose = require("mongoose");
const { Schema } = mongoose;

const producerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  rateType: { type: String, required: true },
});
