// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../prisma/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { InsensitiveUserInformation } from "@/models/users";


type Message = {
    message?: string;
  };
  

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = getServerSession(req, res, authOptions);

  const supportedRequestMethods: { [key: string]: Function } = {
    GET: getUser,
  };

  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}


async function getUser(
  req: NextApiRequest,
  res: NextApiResponse<Message | InsensitiveUserInformation>
) {
    let id = Number(req.query.id);

    try {
        const userInfo = await persistentUserInstance.getUserById(id);
        if (!userInfo || Object.keys(userInfo).length === 0) {
          return res.status(404).send({message: "User not found"})
        }
        return res.status(200).send(userInfo);
    } catch (error) {
        return res.status(403).send({ message: String(error) });
    }
}
