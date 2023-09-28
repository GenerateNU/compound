// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import persistentUserInstance from "../../../../lib/persistentUserInstance";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import Users from "@/models/users";
import { error } from "console";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();
import persistentQuizzesInstance from "../../../../lib/persistentQuizzesInstance";
import { QuizInfo } from "@/models/quizzes";

type Message = {
  message?: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);
  console.log("hello");
  const supportedRequestMethods: { [key: string]: Function } = {
    GET: getQuiz,
  };
  console.log(req.body);

  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}


async function getQuiz(
  req: NextApiRequest,
  res: NextApiResponse<Message | QuizInfo>
) {
  let id = Number(req.query.id);

  try {
    const quizInfo = await persistentQuizzesInstance.getQuizById(id);
    if (!quizInfo || Object.keys(quizInfo).length === 0) {
      return res.status(404).send({ message: "Submodule Quiz Not Found" });
    }
    return res.status(200).send(quizInfo);
  } catch (error) {
    return res.status(403).send({ message: String(error) });
  }

}
