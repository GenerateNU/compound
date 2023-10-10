/*
  Warnings:

  - You are about to drop the column `passed` on the `ModuleExam` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `ModuleExam` table. All the data in the column will be lost.
  - You are about to drop the column `passed` on the `SubModuleQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `SubModuleQuiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ModuleExam" DROP COLUMN "passed",
DROP COLUMN "score";

-- AlterTable
ALTER TABLE "SubModuleQuiz" DROP COLUMN "passed",
DROP COLUMN "score",
ADD COLUMN     "answers" TEXT[];
