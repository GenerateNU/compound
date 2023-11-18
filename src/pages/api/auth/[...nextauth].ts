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
        const isUserinDB = await persistentUserInstance.isUserInDatabase(user.email)
        console.log(isUserinDB)
        if(isUserinDB === false) {
          const dummyUserData: UserData = {
            email: user.email,
            phoneNumber: null,
            firstName: user.name?.split(" ")[0] as string,
            lastName: user.name?.split(" ")[1] as string,
            dob: new Date(),
          };
          await persistentUserInstance.signUpProviderDetails(dummyUserData);
          return '/auth-frontend/signUp'
        }
        else {
          return '/dashboard'
        }
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
