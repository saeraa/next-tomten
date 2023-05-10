import { setCookie } from "cookies-next";
import JWT from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sessionData = {
      email: req.body.email
    };
    //needs to be changed before production
    const signedContent = JWT.sign(sessionData, "1234abcd");
    setCookie("session", signedContent, { req, res, maxAge: 60 * 20 });
    res.status(201).send("");
  }
}
