import mongoose from "mongoose";

const ShowtimeSchema = new mongoose.Schema({
  salong: String,
  date: Date,
  movieId: Number
});

export default mongoose.models?.Showtime ||
  mongoose.model("Showtime", ShowtimeSchema);
