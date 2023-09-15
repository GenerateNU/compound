// import persistentUserInstance from "lib/userInstance";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   secret: process.env.JWT_SECRET,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       persistentUserInstance.signUp({ name: user.name, email: user.email });

//       return true;
//     },
//   },
// };

// export default NextAuth(authOptions);
