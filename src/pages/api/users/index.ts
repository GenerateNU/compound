import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../prisma/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Message = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);

  const supportedRequestMethods: { [key: string]: Function } = {
    POST: registerUser,
  };
  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

async function registerUser(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  try {
    await persistentUserInstance.signUp({
      ...req.body,
    });
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }
  return res.status(200).send({ message: "user added" });
}
