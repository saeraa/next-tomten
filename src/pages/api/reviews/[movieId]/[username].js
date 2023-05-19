import dbConnect from "@/utils/dbConnect";
import { getUserReviewsForMovie } from "@/utils/dbFunctions";
import { getCookie } from "cookies-next";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();
    const reviews = await getUserReviewsForMovie(
      req.query.movieId,
      req.query.username
    );
    res.status(200).send(reviews);
  }
}
