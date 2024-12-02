import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { randomBytes, createHash } from "crypto";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    console.log("Received request to reset password.");

    const { email } = await req.json();

    if (!email) {
        console.log("No email provided.");
        return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        console.log("User not found.");
        return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Generate reset token
    const resetToken = randomBytes(32).toString("hex");
    const hashedToken = createHash("sha256").update(resetToken).digest("hex");
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour

    // Store in database
    await prisma.user.update({
        where: { email },
        data: {
            passwordResetToken: hashedToken,
            passwordResetExpires: expiresAt,
        },
    });

    console.log(`Reset token generated: ${resetToken}`);

    return NextResponse.json({
        message: "Password reset link has been sent.",
        resetToken, // Display token in response for testing purposes
    });
}
