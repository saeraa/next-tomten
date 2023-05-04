import mongoose from "mongoose";

const ShowtimeSchema = new mongoose.Schema({
  name: String,
  dates: [
    {
      date: String,
      showtimes: [{ time: String, movieIndex: Number }]
    }
  ]
});

export default mongoose.models?.Showtime ||
  mongoose.model("Showtime", ShowtimeSchema);
