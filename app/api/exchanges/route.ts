import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    // Retrieve the auth_token from cookies
    const cookie = req.cookies.get("auth_token");

    // Ensure the token exists and is a valid string
    const authToken = cookie?.value;
    if (!authToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch user with related exchanges and GiftExchange details
    const user = await prisma.user.findUnique({
        where: { id: authToken },
        include: {
            exchanges: {
                include: {
                    exchange: true, // Include details of related GiftExchange
                },
            },
        },
    });

    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Map the data for client consumption
    const exchanges = user.exchanges.map((guestList) => ({
        id: guestList.exchange.id,
        title: guestList.exchange.title,
        budget: guestList.exchange.budget,
        description: guestList.exchange.description,
        end_date: guestList.exchange.end_date,
        pick_date: guestList.exchange.pick_date,
    }));

    return NextResponse.json(exchanges);
}
