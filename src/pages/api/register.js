import {
  getUserByUserEmail,
  getUserByUserName,
  registerUser
} from "@/utils/tempDB";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await isUserAlreadyRegistered(
      req.body.userName,
      req.body.email
    );
    if (result == false) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      registerUser(req.body);
      res.status(201).send("Ny användare skapad.");
    } else {
      res.status(406).send(JSON.stringify(result));
    }
  }
}

async function isUserAlreadyRegistered(userName, email) {
  let usernameInUse = await getUserByUserName(userName);
  let emailInUse = await getUserByUserEmail(email);
  if ((usernameInUse == null) & (emailInUse == null)) {
    return false;
  } else {
    return emailInUse == null
      ? "Användarnamnet upptaget."
      : usernameInUse == null
      ? "E-postadressen finns redan registrerad."
      : "Både användarnamnet och e-postadressen är upptagna.";
  }
}
