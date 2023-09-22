import { PrismaClient } from "@prisma/client";
import { JsonObject, PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

type QAEntry = {
    question: string;
    topic: string;
    answer: number;
}

//TODO: figure this shit out
//this would need to be updated based on question/answer format
//this is with the assumption that we are saying the questions look like:
//Q: On a scale of 1-10 how much do you know about...
interface IntakeTestData {
    userId: number;
    qa: Array<QAEntry>
}
const UNIQUE_CONSTRAINT_ERROR_CODE = "P2002";

export default class IntakeTest {
    constructor(private readonly intakeDB: PrismaClient["intakeTest"]) {}

    public async takeTest(data: IntakeTestData) {
        try {
            data.qa.forEach(async (value) => {
                const dataEntry = {
                    userId: data.userId,
                    topic:value.topic,
                    score:value.answer,
                    createdAt: new Date(),
                }
                await this.intakeDB.create({data: dataEntry});
                console.log(dataEntry);
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === UNIQUE_CONSTRAINT_ERROR_CODE) {
                    const parseErrorMessage = error.message.split("`");
                    const failedOn = parseErrorMessage[parseErrorMessage.length - 2];
                    throw new Error("Unique Constraint Violation Failed on " + failedOn);
                }
            } else {
                throw error;
            }
        }
    }

}