import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  movieId: String,
  comment: String
});

module.exports =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema);
