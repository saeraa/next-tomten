import { getUserByUserName } from "@/utils/tempDB";
import bcrypt from "bcryptjs";
import { setCookie } from "cookies-next";
import JWT from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
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
        /*  const key = process.env.ENCYPTION_KEY;
        console.log(key);
        This needs to be changed*/
        const signedContent = JWT.sign(sessionData, "1234abcd");
        setCookie("session", signedContent, { req, res, maxAge: 60 * 30 });
        res.status(201).send(JSON.stringify("Nu är du inloggad."));
      } else {
        res.status(401).send(JSON.stringify("Fel lösenord."));
      }
    }
  }
}
