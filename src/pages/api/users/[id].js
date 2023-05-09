import dbConnect from "@/utils/dbConnect";
import { deleteUser, modifyUser } from "@/utils/dbFunctions";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "DELETE":
      try {
        const response = await deleteUser(req.query.id);
        res.status(200).json({ success: true, data: response.deletedCount });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PATCH":
      try {
        const response = await modifyUser(req.query.id, req.body);
        res.status(200).json({ success: true, data: response.modifiedCount });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
