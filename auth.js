import { loginService } from "@/service/auth/auth.service";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { auth, signOut, signIn } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        console.log(email, password);
        const res = await loginService({ email, password });
        return res;
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token;
    },
    async session(props) {
      const { token } = props;
      return token.token.user;
    },
  },
  strategy: "jwt",

  pages: {
    signIn: "/login",
  },
});
