import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { token, password } = await req.json();

    if (!token || !password) {
        return NextResponse.json({ error: "Token and password are required." }, { status: 400 });
    }

    const hashedToken = createHash("sha256").update(token).digest("hex");

    // Find user with matching token and ensure it's not expired
    const user = await prisma.user.findFirst({
        where: {
            passwordResetToken: hashedToken,
            passwordResetExpires: {
                gt: new Date(),
            },
        },
    });

    if (!user) {
        return NextResponse.json({ error: "Invalid or expired token." }, { status: 400 });
    }

    // Hash the new password and update the user
    const newHashedPassword = createHash("sha256").update(password).digest("hex");

    await prisma.user.update({
        where: { id: user.id },
        data: {
            password: newHashedPassword,
            passwordResetToken: null,
            passwordResetExpires: null,
        },
    });

    return NextResponse.json({ message: "Password reset successfully." });
}
