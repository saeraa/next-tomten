import User from "@/models/User";
import Showtime from "@/models/Showtime";
import Booking from "@/models/Booking";
import Review from "@/models/Review";
import Movie from "@/models/Movie";

// USERS

export async function addUser(data) {
  return await User.create(data);
}

export async function getUsers() {
  return await User.find();
}

export async function getOneUser(id) {
  return await User.findOne({ _id: id });
}

export async function modifyUser(id, data) {
  return await User.updateOne({ _id: id }, data);
}

export async function deleteUser(id) {
  return await User.deleteOne({ _id: id });
}

// SHOWTIMES

export async function getShowtimes() {
  return await Showtime.find();
}

export async function addShowtimes(data) {
  return await Showtime.create(data);
}

export async function getShowtimesForMovie(id) {
  return await Showtime.find({ "dates.showtimes.movieIndex": id });
}

// BOOKINGS

export async function getBookings(userId) {
  return await Booking.find({ userId: userId });
}

export async function addBooking(data) {
  return await Booking.create(data);
}

// REVIEWS

export async function getReviews() {
  return await Review.find();
}

export async function addReview(data) {
  return await Review.create(data);
}

export async function getReviewsForMovie(id) {
  return await Review.find({ movieId: id });
}

// MOVIES

export async function getMovies() {
  return await Movie.find();
}

export async function getMovie(id) {
  return await Movie.findById(id);
}

export async function addMovie(data) {
  return await Movie.create(data);
}