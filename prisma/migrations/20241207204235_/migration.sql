/*
  Warnings:

  - You are about to drop the column `share_id` on the `GiftExchange` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "GiftExchange_share_id_key";

-- AlterTable
ALTER TABLE "GiftExchange" DROP COLUMN "share_id";
