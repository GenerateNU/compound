// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { PrismaClient, SubModuleQuiz, ModuleExam } from "@prisma/client";
import { Message } from "../../../../../lib/CompoundTypes";
import { QuizAnswersType } from "../../../../../lib/CompoundTypes";
import persistentUserInstance from "../../../../../lib/persistentUserInstance";
import { QuizSubmission } from "../../../../../lib/CompoundTypes";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);
  const supportedRequestMethods: { [key: string]: Function } = {
    POST: postQuizSubmission,
  };

  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}


async function postQuizSubmission(
    req: NextApiRequest,
    res: NextApiResponse<Message | QuizSubmission >
) {
    const id = Number(req.query.id);
    const quizsubmission : QuizAnswersType = req?.body?.submission
    const userId = Number (req?.body?.userId)

    try {
        const subModuleQuiz = await prisma.subModuleQuiz.findUnique({
            where: {
                id
            },
        });
        const correctAnswers = subModuleQuiz?.answers
        const subModuleQuizId = subModuleQuiz?.id

        if(!subModuleQuizId || !correctAnswers || correctAnswers.length == 0) {
             return res.status(404).send({ message: "Sub Module Quiz not found" })
        }


        if (correctAnswers?.length != quizsubmission?.length) {
            return res.status(400).send({ message: "Different amount of questions and answers" })
          }
    
          let result:boolean[] = []
          let score = 0
          for(let i=0; i< correctAnswers.length; i++) {
            if (correctAnswers[i] == quizsubmission[i]) {
              result.push(true)
              score += 1
            } else {
              result.push(false)
            }
          }
          score = (score / result.length) * 100
          try {
            await persistentUserInstance.updateUserSubModuleQuiz(userId, id, subModuleQuizId, result, score);
          } catch (Error) {
            return res.status(403).send({message: "User Not Found"})
          }
    
          return res.status(200).send({"subModuleQuizId": id, "score": score});
    
        } catch (error) {
          return res.status(403).send({ message: "Please input an Integer" });
        }



    }