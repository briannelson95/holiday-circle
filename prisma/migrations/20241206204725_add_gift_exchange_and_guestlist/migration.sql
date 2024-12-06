/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "GiftExchange" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "host_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "budget" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "pick_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GiftExchange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestList" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "exchange_id" INTEGER NOT NULL,

    CONSTRAINT "GuestList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GiftExchange" ADD CONSTRAINT "GiftExchange_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestList" ADD CONSTRAINT "GuestList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestList" ADD CONSTRAINT "GuestList_exchange_id_fkey" FOREIGN KEY ("exchange_id") REFERENCES "GiftExchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
