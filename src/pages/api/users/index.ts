import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../lib/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getServerSession(req, res, authOptions);

  const supportedRequestMethods: { [key: string]: Function } = {
    POST: registerUser,
    GET: getUser,
    PUT: updateUser,
  };
  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

async function updateUser(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    await persistentUserInstance.updateUser({
      ...req.body,
    });
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }
  return res.status(200).send({ message: "user added" });
}

async function registerUser(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    await persistentUserInstance.signUp({
      ...req.body,
    });
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }
  return res.status(200).send({ message: "user added" });
}

async function getUser(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const email = req.query.email as string;
    const userDetails = await persistentUserInstance.getUser(email);
    return res.status(200).send(userDetails);
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }
}
