import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from '../../../../prisma/client'

const handler = NextAuth({
    ...
});

export { handler as GET, handler as POST };
