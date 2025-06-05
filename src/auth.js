// app/api/auth/[...nextauth]/route.js or route.ts (depending on your setup)

import { loginService } from "@/service/auth/auth.service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const res = await loginService({ email, password });

          if (res?.token && res?.user) {
            return {
              id: res.user.id,
              name: res.user.fullName,
              email: res.user.email,
              role: res.user.role,
              accessToken: res.token,
            };
          }

          return null; // If missing token/user, trigger CredentialsSignin error
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // `user` is only available on first login
      if (user) {
        token.user = user;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  debug: true, // helpful in development
});
