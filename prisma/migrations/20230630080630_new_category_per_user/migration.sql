/*
  Warnings:

  - Added the required column `ownerId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "ownerId" TEXT NOT NULL;
