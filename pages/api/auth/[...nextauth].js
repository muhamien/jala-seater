import NextAuth from "next-auth";
import { compare, hash } from "bcrypt";
import { gql, GraphQLClient } from "graphql-request";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
});

const GetUserByEmail = gql`
  query GetUserByEmail($email: String!) {
    user: employee(where: { email: $email }, stage: DRAFT) {
      id
      password
    }
  }
`;

const CreateNextUserByEmail = gql`
  mutation CreateNextUserByEmail($email: String!, $password: String!) {
    newUser: createEmployee(data: { email: $email, password: $password }) {
      id
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
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error', // Error code passed in query string as ?error=
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        },
        async session({ session, user, token }) {

          return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          return token
        }
    }
})