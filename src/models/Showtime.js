import mongoose from "mongoose";

const ShowtimeSchema = new mongoose.Schema({
  salong: String,
  date: Date,
  movieId: String
});

module.exports =
  mongoose.models.Showtime || mongoose.model("Showtime", ShowtimeSchema);
