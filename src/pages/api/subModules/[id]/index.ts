import type { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../../../lib/CompoundTypes";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  return res.status(404).send({ message: "Not Implemented" });
}