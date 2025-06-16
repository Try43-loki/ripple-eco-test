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
          const loginRes = await fetch(`${baseUrl}/auths/google-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: profile?.email }),
          });
          const loginData = await loginRes.json(); // token only
          console.log("loginRes", loginRes);
          if (loginRes.ok && loginData.data?.token) {
            user.customToken = loginData.data?.token;
            // user.user.userId = loginData.data.id;
            return true;
          }
          console.log("user", user);
          // if (user?.customToken) {
          //   const res = await fetch(`${baseUrl}/profile`, {
          //     method: "GET",
          //     headers: {
          //       "Content-Type": "application/json",
          //       Authorization: `Bearer ${user.customToken}`,
          //     },
          //   });
          //   const profile = await res.json();
          //   if (profile?.code == 200) {
          //     user.role = profile.data.organizer ? "ORGANIZER" : "USER" ?? "";
          //     user.userId = profile.data.appUserId;
          //   }
          // }
          const fullName = profile?.name?.split(" ");
          const googleFirstName = fullName[0];
          const googleLastName = fullName[fullName.length - 1];
          const response = await fetch(`${baseUrl}/auths/google-signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: profile?.email,
              profileImageUrl: profile?.picture,
              firstName: googleFirstName,
              lastName: googleLastName,
              address: "string",
              birthDate: "2001-01-10",
              gender: "MALE",
              phoneNumber: "012345678",
              isOrganizer: true,
              organizerName: "",
            }),
          });
          const data = await response.json(); // token only

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
      if (user?.customToken) {
        const res = await fetch(`${baseUrl}/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.customToken}`,
          },
        });
        const profile = await res.json();
        if (profile?.code == 200) {
          user.role = profile.data.organizer ? "ORGANIZER" : "USER" ?? "";
          user.userId = profile.data.appUserId;
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      // On initial sign in
      if (user?.customToken) {
        token.customToken = user.customToken;
        token.userId = user.userId;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      // Attach custom values to the session object
      if (token?.customToken) {
        session.customToken = token.customToken;
        session.user.userId = token.userId;
        session.user.role = token.role;
      }
      return session;
    },
  },

  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});
