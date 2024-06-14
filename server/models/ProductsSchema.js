const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const product_Schema = new Schema({
  id: { type: String, require: true, unique: true },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  shortTitle: String,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const Product_model = mongoose.model("Product", product_Schema);

module.exports = Product_model;
