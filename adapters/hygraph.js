import { gql, GraphQLClient } from "graphql-request";
import { useSession } from "next-auth/react";
import { hygraphClient } from "../lib/hygraph";

const GetUserByEmail = gql`
query GetUserByEmail($email: String!) {
  user: employee(where: { email: $email },stage:DRAFT) {
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

export function HygraphAdapter() {
    return {
      async createUser(user) {
        const newUser = await hygraphClient.request(
          CreateNextUserByEmail,
          {
            name:user.name,
            email:user.email,
            photo:user.image,
          }
        )
        return newUser;
      },
      async getUser(id) {
        return;
      },
      async getUserByEmail(email) {
        const user = hygraphClient.request(GetUserByEmail, {
          email:email,
        });
        return uesr;
      },
      async getUserByAccount({ providerAccountId, provider }) {
        return;
      },
      async updateUser(updatedUser) {
        return;
      },
      async linkAccount(account) {
        return;
      },
      async createSession(session) {
        return;
      },
      async getSessionAndUser(sessionToken) {
        return;
      },
      async updateSession(session) {
        return;
      },
      async deleteSession(sessionToken) {
        return;
      },
    }
  }