/*
  Warnings:

  - You are about to drop the `ModuleQuiz` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ModuleQuiz" DROP CONSTRAINT "ModuleQuiz_moduleId_fkey";

-- DropTable
DROP TABLE "ModuleQuiz";

-- CreateTable
CREATE TABLE "ModuleExam" (
    "id" SERIAL NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "questions" TEXT[],
    "passed" BOOLEAN NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ModuleExam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ModuleExam" ADD CONSTRAINT "ModuleExam_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
