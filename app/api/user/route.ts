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

    const user = await prisma.user.findUnique({
        where: { id: authToken },
    });

    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(user); // Return only the user
}
