// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { PrismaClient, ModuleExam } from "@prisma/client";
const prisma = new PrismaClient();
import { Message } from "../../../../../lib/CompoundTypes";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);
  const supportedRequestMethods: { [key: string]: Function } = {
    GET: getExam,
  };

  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

async function getExam(
  req: NextApiRequest,
  res: NextApiResponse<Message | ModuleExam>
) {
  let id = Number(req.query.id);

  try {
    const moduleExam = await prisma.moduleExam.findUnique({
        where: {
          id
        }
      });
    if (!moduleExam || Object.keys(moduleExam).length == 0) {
        return res.status(404).send({message: "Module Exam not found"})
    }
      return res.status(200).send(moduleExam);
        
  } catch (error) {
    return res.status(403).send({ message: "Please input an Integer" });
  }
}
