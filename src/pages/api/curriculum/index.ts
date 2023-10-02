//GET lists all curriculums, POST creates new curriculum

import { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../../lib/CompoundTypes";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { CurriculumInformation } from "@/models/curriculum";
import persistentCurriculumInstance from "../../../../lib/persistentCurriculumInstance";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Message>
) {
    const session = await getServerSession(req, res, authOptions);
    const supportedRequestMethods: { [key: string]: Function } = {
        GET: getCurriculum,
    };
    console.log(req.body);

    if (req.method) {
        return supportedRequestMethods[req.method](req, res, session);
    }
    return res.status(405).send({message: "request method not supported"});
}


async function getCurriculum(
    req: NextApiRequest,
    res: NextApiResponse<Message | CurriculumInformation>
  ) {
    let id = Number(req.query.id);
  
    try {
      const curriculumInfo = await persistentCurriculumInstance.getCurriculumById(id);
      if (!curriculumInfo || Object.keys(curriculumInfo).length === 0) {
        return res.status(404).send({ message: "Curriculum not found" });
      }
      return res.status(200).send(curriculumInfo);
    } catch (error) {
      return res.status(403).send({ message: String(error) });
    }
  }