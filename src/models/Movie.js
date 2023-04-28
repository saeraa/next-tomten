import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  title: String,
  length: Number,
  description: String,
  actors: Array,
  director: Array,
  genre: Array,
  imdbRating: Number,
  release: Date,
  language: String,
  poster: String
});

module.exports = mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
