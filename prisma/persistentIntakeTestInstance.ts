import IntakeTest from "@/models/intakeTest";
import prisma from "./client";

const persistentIntakeTestInstance = new IntakeTest(prisma.intakeTest)

export default persistentIntakeTestInstance;