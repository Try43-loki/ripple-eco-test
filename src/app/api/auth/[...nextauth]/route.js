import { loginService } from "../../../../service/auth/auth.service";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const response = await loginService({
          email: credentials.email,
          password: credentials.password,
        });

        if (response?.status === 400) {
          throw new Error(response?.detail || "Invalid credentials");
        }

        if (!response?.payload) {
          return null;
        }

        return response.payload;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // your custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
