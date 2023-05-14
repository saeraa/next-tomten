import { deleteCookie } from "cookies-next";

export default async function handler(req, res) {
  if (req.method === "POST") {
    deleteCookie("session", { req, res });
    res.status(200).send();
  }
}
