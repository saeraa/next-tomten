import { getUserByUserEmail } from "@/utils/tempDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = await getUserByUserEmail(req.body.email);
    if (user != null) {
      res
        .status(200)
        .send(JSON.stringify("Lösenordet skickades till din e-post."));
    } else {
      res
        .status(400)
        .send(
          JSON.stringify(
            "Det finns ingen användare registrerad med den e-postaddressen!"
          )
        );
    }
  }
}
