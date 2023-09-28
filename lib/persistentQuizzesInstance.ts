import Quizzes from "@/models/quizzes";
import prisma from "./client";


const persistentQuizzesInstance = new Quizzes(prisma.subModuleQuiz);

export default persistentQuizzesInstance;