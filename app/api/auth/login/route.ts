import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";
import { serialize } from "cookie";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Hash the provided password and compare with the stored hash
    const hashedPassword = createHash("sha256").update(password).digest("hex");

    if (hashedPassword !== user.password) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Set a cookie to simulate a session (JWT or session token can be used here)
    const cookie = serialize("auth_token", user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });

    return NextResponse.json({ message: "Login successful" }, {
        headers: {
            "Set-Cookie": cookie,
        },
    });
}
