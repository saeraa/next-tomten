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

export default mongoose.models?.User || mongoose.model("User", UserSchema);
