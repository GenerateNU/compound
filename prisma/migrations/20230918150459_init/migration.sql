/*
  Warnings:

  - You are about to drop the column `verified_on` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "verified_on",
ADD COLUMN     "password" TEXT,
ALTER COLUMN "verified" SET DEFAULT false;
