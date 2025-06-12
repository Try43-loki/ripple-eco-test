import { loginService } from "@/service/auth/auth.service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { registerWithGoogleAction } from "./action/auth-action";
import { baseUrl } from "./service/constants";
import { getUserProfileAction } from "./action/user-action";

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const res = await loginService(email, password);
          if (res && res.data?.token) {
            return {
              id: res.data.id,
              email,
              customToken: res.data.token,
            };
          }

          return null;
        } catch (error) {
          console.error("Credentials login error:", error);
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
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          // login with google
          const loginRes = await fetch(`${baseUrl}/auths/google-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: profile?.email }),
          });
          const loginData = await loginRes.json(); // token only
          if (loginRes.ok && loginData.data?.token) {
            user.customToken = loginData.data?.token;
            return true;
          }
        } catch (err) {
          console.error("Sign-in exception:", err);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      // On initial sign in
      if (user?.customToken) {
        token.customToken = user.customToken;
      }

      return token;
    },
    async session({ session, token }) {
      // Attach custom values to the session object
      if (token?.customToken) {
        session.customToken = token.customToken;
      }
      return session;
    },
  },

  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});
