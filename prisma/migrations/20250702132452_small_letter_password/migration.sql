/*
  Warnings:

  - You are about to drop the column `Password` on the `Users` table. All the data in the column will be lost.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "Password",
ADD COLUMN     "password" TEXT NOT NULL;
