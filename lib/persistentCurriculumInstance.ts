import Curriculum from "@/models/curriculum";
import prisma from "./client";


const persistentCurriculumInstance = new Curriculum(prisma.curriculum);

export default persistentCurriculumInstance;
