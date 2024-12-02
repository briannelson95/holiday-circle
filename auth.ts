import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./lib/prisma"
import credentials from "next-auth/providers/credentials"
import email from "next-auth/providers/email"
import bcrypt from "bcryptjs";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                throw new Error("Missing email or password");
                }
        
                const user = await prisma.user.findUnique({
                where: { email: credentials.email },
                });
        
                if (!user) {
                throw new Error("No user found with this email");
                }
        
                const isValid = await bcrypt.compare(credentials.password, user.password || "");
        
                if (!isValid) {
                throw new Error("Invalid password");
                }
        
                return user;
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async session({ session, user }) {
        if (user) {
            session.user.id = user.id;
        }
        return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
        signUp: "/auth/signup", // Optional custom signup page
    },
})