// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../prisma/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { User } from "@prisma/client";

type Message = {
    message: string | User | null;
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
  res: NextApiResponse<Message>
) {
    let id: number;

    try {
        id = Number(req.query.id)
    if ( typeof id !== 'number') {
        throw Error('Please input an Integer')
    }
    } catch (error) {
        return res.status(403).send({ message: String(error) });
    }
    try {
        const userInfo = await persistentUserInstance.getUserById(id);
        return res.status(200).send({ message: userInfo });
    } catch (error) {
        return res.status(403).send({ message: String(error) });
    }
}
