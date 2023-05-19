import { setCookie } from "cookies-next";
import JWT from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sessionData = {
      email: req.body.email
    };
    const signedContent = JWT.sign(sessionData, process.env.SIGN_KEY);
    setCookie("session", signedContent, { req, res, maxAge: 60 * 20 });
    res.status(201).send("");
  }
}
