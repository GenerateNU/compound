import { PrismaClient } from "@prisma/client";
import { JsonObject, PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

type TestEntry = {
    topic: string;
    score: number;
}

interface IntakeTestData {
  userId: number;
  intakeTests: Array<TestEntry>
  [key:string] : any;
}
const UNIQUE_CONSTRAINT_ERROR_CODE = "P2002";

export default class IntakeTest {
    constructor(private readonly intakeDB: PrismaClient["intakeTest"]) {}

    public async takeTest(data: IntakeTestData) {
        try {
            data.intakeTests.forEach(async (value) => {
                const dataEntry = {
                    userId: data.userId,
                    topic:value.topic,
                    score:value.score,
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