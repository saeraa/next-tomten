import dbConnect from "@/utils/dbConnect";
import { getUserByEmail } from "@/utils/dbFunctions";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const user = await getUserByEmail(req.body.email);
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
