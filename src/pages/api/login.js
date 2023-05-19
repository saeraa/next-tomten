import dbConnect from "@/utils/dbConnect";
import { getUserByUserName } from "@/utils/dbFunctions";
import bcrypt from "bcryptjs";
import { setCookie } from "cookies-next";
import JWT from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const user = await getUserByUserName(req.body.userName);
    if (user == null) {
      res
        .status(403)
        .send(JSON.stringify("Det finns ingen med det användarnamnet."));
    } else {
      if (await bcrypt.compare(req.body.password, user.password)) {
        const sessionData = {
          userName: req.body.userName
        };
        const signedContent = JWT.sign(sessionData, process.env.SIGN_KEY);
        setCookie("session", signedContent, { req, res, maxAge: 60 * 30 });
        res.status(201).send(JSON.stringify("Nu är du inloggad."));
      } else {
        res.status(401).send(JSON.stringify("Fel lösenord."));
      }
    }
  }
}
