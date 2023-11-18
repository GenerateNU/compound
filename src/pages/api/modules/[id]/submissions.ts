// GET, PUT, DELETE operations for a specific user by ID
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import { PrismaClient, ModuleExam } from "@prisma/client";
import { Message } from "../../../../../lib/CompoundTypes";
import { AnswersType } from "../../../../../lib/CompoundTypes";
import persistentUserInstance from "../../../../../lib/persistentUserInstance";
import { ExamSubmissionResponse } from "../../../../../lib/CompoundTypes";
import prisma from "../../../../../lib/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  const session = await getServerSession(req, res, authOptions);
  const supportedRequestMethods: { [key: string]: Function } = {
    POST: postSubmission,
  };

  if (req.method) {
    return supportedRequestMethods[req.method](req, res, session);
  }
  return res.status(405).send({ message: "request method not supported" });
}

async function postSubmission(
  req: NextApiRequest,
  res: NextApiResponse<Message | ExamSubmissionResponse>
) {
    const moduleId = Number(req.query.id);
    const userId = Number(req?.body?.userId)
    const submission: AnswersType = req?.body?.submission
    try {
      const moduleExam = await prisma.moduleExam.findUnique({
        where: {
          moduleId
        },
   
      });
      const correctAnswers = moduleExam?.answers
      const moduleExamId = moduleExam?.id

   
      if (!moduleExamId || !correctAnswers || correctAnswers.length == 0) {
        return res.status(404).send({ message: "Module Exam not found" })
      }


      if (correctAnswers?.length != submission?.length) {
        return res.status(400).send({ message: "Different amount of questions and answers" })
      }
      
      let result:boolean[] = []
      let score = 0
      for(let i=0; i< correctAnswers.length; i++) {
        if (correctAnswers[i] == submission[i]) {
          result.push(true)
          score += 1
        } else {
          result.push(false)
        }
      }
      score = (score / result.length) * 100
      try {
        await persistentUserInstance.updateUserModuleExam(userId, moduleId, moduleExamId, result, score);
      } catch (Error) {
        return res.status(403).send({message: "User Not Found"})
      }

      return res.status(200).send({"moduleID": moduleId, "score": score});

    } catch (error) {
      return res.status(403).send({ message: "Please input an Integer" });
    }
  }
