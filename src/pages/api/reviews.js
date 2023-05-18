import dbConnect from "@/utils/dbConnect";
import { addReview } from "@/utils/dbFunctions";
import JWT from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const cookieSession = req.headers.cookie.split("session=")[1];
    const decoded = JWT.verify(cookieSession, process.env.SIGN_KEY);
    if (decoded.userName === req.body.author) {
      await dbConnect();
      await addReview(req.body);
      res.status(201).send("Thanks for the review");
    } else {
      res.status(401).send("You are unauthorized to do this");
    }
  }
}
