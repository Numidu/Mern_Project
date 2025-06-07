import mongoose from "mongoose";

const userScema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  roll: {
    type: String,
    required: true,
    default: "Customer",
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phonenumber: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", userScema);
export default user;
