import { PrismaClient, User } from "@prisma/client";

import isEmail from "isemail";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { UserData, UserReturnType } from "../../lib/CompoundTypes";
import { data } from "autoprefixer";

// Uer Information that is Insensitive
export interface QuizInfo {
  id: number;
  questions?: string[];
  passed?: boolean;
  score?: number;
}
const UNIQUE_CONSTRAINT_ERROR_CODE = "P2002";

export default class SubModuleQuizzes {
  constructor(private readonly quizDB: PrismaClient["subModuleQuiz"]) {}


  // Get Insensitive User Information By ID
  public async getQuizById(id: number) {
    try {
      // Select Insensitive User Information from Database based on ID
      const QuizzesInfo: QuizInfo | null =
        await this.quizDB.findUnique({
          where: {
            id,
          },
          select: {
            id: true,
            questions: true,
            passed: true,
            score: true,
          },
        });

      return QuizzesInfo;
    } catch (Error) {
      throw "Error: getQuizId is not an Number";
    }
  }

}