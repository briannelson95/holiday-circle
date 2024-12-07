/*
  Warnings:

  - A unique constraint covering the columns `[share_id]` on the table `GiftExchange` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `share_id` to the `GiftExchange` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GiftExchange" ADD COLUMN     "share_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "GiftExchange_share_id_key" ON "GiftExchange"("share_id");
