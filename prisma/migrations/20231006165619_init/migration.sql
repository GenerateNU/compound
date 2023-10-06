/*
  Warnings:

  - You are about to drop the column `curriculumId` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ModuleExam` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ModuleExam` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Progress` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `employmentStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ethnicity` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `livingStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `registrationDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Advisor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Badge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Consultation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Curriculum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserBadge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationRequest` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[moduleId]` on the table `ModuleExam` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subModuleId]` on the table `SubModuleQuiz` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleId` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subModuleId` to the `Progress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `moduleExamScores` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subModuleQuizScores` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_advisorId_fkey";

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_curriculumId_fkey";

-- DropForeignKey
ALTER TABLE "Progress" DROP CONSTRAINT "Progress_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserBadge" DROP CONSTRAINT "UserBadge_badgeId_fkey";

-- DropForeignKey
ALTER TABLE "UserBadge" DROP CONSTRAINT "UserBadge_userId_fkey";

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "curriculumId";

-- AlterTable
ALTER TABLE "ModuleExam" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "answers" TEXT[];

-- AlterTable
ALTER TABLE "Progress" DROP COLUMN "date",
ADD COLUMN     "moduleId" INTEGER NOT NULL,
ADD COLUMN     "subModuleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "createdAt",
DROP COLUMN "education",
DROP COLUMN "emailVerified",
DROP COLUMN "employmentStatus",
DROP COLUMN "ethnicity",
DROP COLUMN "gender",
DROP COLUMN "languages",
DROP COLUMN "livingStatus",
DROP COLUMN "maritalStatus",
DROP COLUMN "password",
DROP COLUMN "registrationDate",
DROP COLUMN "updatedAt",
DROP COLUMN "verified",
ADD COLUMN     "lessonsCompleted" INTEGER[],
ADD COLUMN     "moduleExamScores" JSONB NOT NULL,
ADD COLUMN     "preferences" TEXT[],
ADD COLUMN     "registered" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subModuleQuizScores" JSONB NOT NULL;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Advisor";

-- DropTable
DROP TABLE "Badge";

-- DropTable
DROP TABLE "Consultation";

-- DropTable
DROP TABLE "Curriculum";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "UserBadge";

-- DropTable
DROP TABLE "VerificationRequest";

-- CreateIndex
CREATE UNIQUE INDEX "ModuleExam_moduleId_key" ON "ModuleExam"("moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "SubModuleQuiz_subModuleId_key" ON "SubModuleQuiz"("subModuleId");
