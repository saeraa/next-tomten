import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: String,
  fullName: String,
  address: String,
  email: String,
  phoneNumber: String,
  paymentMethods: Array,
  password: String
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
