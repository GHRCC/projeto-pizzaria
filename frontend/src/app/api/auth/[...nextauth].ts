import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
