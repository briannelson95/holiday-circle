import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const cookieHeader = req.headers.get("cookie");
    const authToken = cookieHeader
        ?.split("; ")
        .find((c) => c.startsWith("auth_token="))
        ?.split("=")[1];

    if (!authToken) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch user-related exchanges
    const exchanges = await prisma.guestList.findMany({
        where: { user_id: authToken },
        include: {
            exchange: true, // Includes related exchange data
        },
    });

    return NextResponse.json(
        exchanges.map((guestList) => guestList.exchange)
    );
}
