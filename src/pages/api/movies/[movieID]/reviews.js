import dbConnect from "@/utils/dbConnect";
import { getReviewsForMovie } from "@/utils/dbFunctions";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await dbConnect();
    const reviews = await getReviewsForMovie(req.query.movieID);
    res.status(200).send(reviews);
  }
}
