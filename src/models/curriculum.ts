import { PrismaClient } from "@prisma/client";

export interface CurriculumInformation {
    title?: string | null;
}

export default class Curriculum {
    constructor(private readonly curriculumDB: PrismaClient["curriculum"]) {}

    public async getCurriculumById(id: number) {
        try {
            const CurriculumInformation: CurriculumInformation | null =
            await this.curriculumDB.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    title: true,
                },
            });
            return CurriculumInformation;
        } catch (Error) {
            throw "Error: Curriculum ID is not a Number";
        }
    }
}