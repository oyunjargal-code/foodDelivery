/*
  Warnings:

  - The `status` column on the `FoodOrder` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Hevlelt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nom` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'CANCELED', 'DELIVERED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Nom" DROP CONSTRAINT "Nom_hevlelID_fkey";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "image" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "ingredients" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "FoodOrder" DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
ADD COLUMN     "address" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isVerifies" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER',
ADD COLUMN     "ttl" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Hevlelt";

-- DropTable
DROP TABLE "Nom";
