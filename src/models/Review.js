import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  movieId: Number,
  comment: String
});

module.exports =
  mongoose.models.Review || mongoose.model("Review", ReviewSchema);
