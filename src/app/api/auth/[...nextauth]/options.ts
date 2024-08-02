import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        const response = await fetch(`${process.env.BACKEND_URL}/users/login`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const apiResponse = await response.json();
        // console.log("apiResponse", apiResponse);
        if (apiResponse?.status === 200) {
          return {
            _id: apiResponse?.data?.user?._id,
            name: apiResponse?.data?.user?.name,
            email: apiResponse?.data?.user?.email,
            role: apiResponse?.data?.user?.role,
            tokens: {
              accessToken: apiResponse?.data?.accessToken,
              refreshToken: apiResponse?.data?.refreshToken,
            },
          };
        }
        // return null;
        throw new Error(apiResponse?.message);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.accessToken = user.tokens.accessToken;
        token.refreshToken = user.tokens.refreshToken;
      }
      // console.log("token in callbacks", token);
      return token;
    },
    async session({ session, token }) {
      // console.log("token in session", token);
      if (token) {
        session.user._id = token._id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
      }
      // console.log("session", session);
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};

export { authOptions as GET, authOptions as POST };
