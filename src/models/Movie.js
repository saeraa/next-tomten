import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  length: Number,
  description: String,
  actors: Array,
  director: Array,
  genre: Array,
  imdbRating: Number,
  poster: String,
  country: Array,
  age: Number,
  image: String,
  trailer: String,
  release: Date,
  language: String,
  subtitle: Array
});

module.exports = mongoose.models.Movie || mongoose.model("Movie", MovieSchema);
