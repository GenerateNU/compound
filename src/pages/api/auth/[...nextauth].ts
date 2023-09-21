import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import persistentUserInstance from "../../../../lib/persistentUserInstance";

export const authOptions: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if(user.email) {
        await persistentUserInstance.signUpProviderDetails(user.email);
      }
      return true
    },
  }

};

export default NextAuth(authOptions);