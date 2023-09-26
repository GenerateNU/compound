import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import persistentUserInstance from "../../../../lib/persistentUserInstance";
import { UserData } from "../../../../lib/CompoundTypes";

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
      
      if (user.email) {
        if(await persistentUserInstance.isUserInDatabase(user.email)) {
          const dummyUserData: UserData = {
            email: user.email,
            phoneNumber: "null",
            firstName: user.name as string,
            lastName: user.name as string,
            dob: new Date(),
          };
          await persistentUserInstance.signUpProviderDetails(dummyUserData);
        }
        else {
          return true
        }
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
