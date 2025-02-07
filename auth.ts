import NextAuth from "next-auth";
/*import FacebookProvider from "next-auth/providers/facebook";*/
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    /* FacebookProvider({
       clientId: process.env.AUTH_FACEBOOK_CLIENT_ID,
       clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET,
     }),*/
  ],
  secret: process.env.AUTH_SECRET!,
});
