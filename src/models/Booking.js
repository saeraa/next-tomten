import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  showtimeId: String,
  userId: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  seats: [String],
  paymentMethod: String
});

export default mongoose.models?.Booking ||
  mongoose.model("Booking", BookingSchema);
