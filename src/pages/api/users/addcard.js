import dbConnect from "@/utils/dbConnect";
import { modifyUserPaymentMethod } from "@/utils/dbFunctions"

export default async function handler(req, res)
{
    const { method } = req;

    await dbConnect();

    switch (method)
    {
        case "PATCH":
            try
            {
                await modifyUserPaymentMethod(req.body.userName, req.body.paymentMethods);
                res.status(201).json({ success: true });
            } catch (error)
            {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }

}