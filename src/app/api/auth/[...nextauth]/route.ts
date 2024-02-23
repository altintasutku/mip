import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import CredentialProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   adapter: PrismaAdapter(db),
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialProvider({
//       id: "credentials",
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         invitationToken: { label: "Invitation Token", type: "password" },
//       },
//       async authorize(credentials, req) {},
//     }),
//   ],
// });
