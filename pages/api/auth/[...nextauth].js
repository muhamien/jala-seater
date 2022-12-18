import { gql } from "graphql-request";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { HygraphAdapter } from '../../../adapters/hygraph';
import { hygraphClient } from "../../../lib/hygraph";

const GetUserByEmail = gql`
query GetUserByEmail($email: String!) {
  user: employee(where: { email: $email }) {
    email
  }
}
`;

const CreateNextUserByEmail = gql`
  mutation CreateNextUserByEmail($email: String!,$name: String!,$photo: String!) {
    newUser: createEmployee(data: { email: $email, name: $name, role: Employee,photo: $photo }) {
      email
      name
      role
      photo
    }
  }
`;

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      // console.log(session)
      // const getUser = await hygraphClient.request(GetUserByEmail, {
      //     email:session.email,
      // });

      //   if (!getUser) {
      //     console.log('creating new user')
      //     const newUser = await hygraphClient.request(
      //         CreateNextUserByEmail,
      //         {
      //             email: session.email,
      //             name: session.name,
      //             photo: session.image,
      //         }
      //     );

      //     return {
      //         id: newUser.id,
      //         email: newUser.email,
      //         name: newUser.name,
      //     };
      // }
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log(token, user, account, profile, isNewUser)
      return token
    },
  },
  // adapter: HygraphAdapter(),
})