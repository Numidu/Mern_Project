import mongoose from "mongoose";

const productschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const product = mongoose.model("Product", productschema);
export default product;
