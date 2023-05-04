import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  movieId: Number,
  comment: String
});

export default mongoose.models?.Review ||
  mongoose.model("Review", ReviewSchema);
