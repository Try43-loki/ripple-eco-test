import { loginService } from "@/service/auth/auth.service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { registerWithGoogleAction } from "./action/auth-action";
import { baseUrl } from "./service/constants";

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
        const { email, password } = credentials;
        const user = await loginService({ email, password });
        console.log("user", user);
        return user;
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
          const loginRes = await fetch(`${baseUrl}/auths/google-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: profile?.email }),
          });

          const loginData = await loginRes.json();

          if (loginRes.ok && loginData.data?.token) {
            user.customToken = loginData.data?.token;
            user.userId = loginData.data.id;
            return true;
          }

          const response = await fetch(`${baseUrl}/auths/google-signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: profile?.email,
              profileImageUrl: profile?.picture,
              firstName: "string",
              lastName: "Try",
              address: "data",
              birthDate: "2002-02-10",
              gender: "MALE",
              phoneNumber: "0987654321",
              isOrganizer: false,
              organizerName: "",
            }),
          });

          const data = await response.json();
          console.log("data", data);

          if (response.ok && data.data.token) {
            user.customToken = data.data.token;
            user.userId = data.data.id;
          } else {
            console.error("API registration failed:", data);
            return false;
          }
        } catch (err) {
          console.error("Sign-in exception:", err);
          return false;
        }
      }

      return true;
    },

    // async jwt(token) {
    //   return token;
    // },
    // async session(props) {
    //   const { token } = props;
    //   return token.token.user;
    // },
    async jwt({ token, user }) {
      // On initial sign in
      if (user?.customToken) {
        token.customToken = user.customToken;
        token.userId = user.userId;
      }

      return token;
    },
    async session({ session, token }) {
      // Attach custom values to the session object
      if (token?.customToken) {
        session.customToken = token.customToken;
        session.userId = token.userId;
      }
      return session;
    },
  },

  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});
