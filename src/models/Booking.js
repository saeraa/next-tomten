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

module.exports =
  mongoose.models.Booking || mongoose.model("Booking", BookingSchema);
