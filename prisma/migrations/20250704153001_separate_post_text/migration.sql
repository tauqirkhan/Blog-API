/*
  Warnings:

  - You are about to drop the column `postText` on the `Posts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postBody` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postTitle` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "postText",
ADD COLUMN     "postBody" TEXT NOT NULL,
ADD COLUMN     "postTitle" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
