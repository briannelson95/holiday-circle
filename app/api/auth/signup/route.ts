import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { email, password, name } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return NextResponse.json({ error: "User already exists." }, { status: 400 });
    }

    // Hash password using SHA-256
    const hashedPassword = createHash("sha256").update(password).digest("hex");

    // Create user
    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
        },
    });

    return NextResponse.json({ message: "User created successfully", user: newUser });
}
