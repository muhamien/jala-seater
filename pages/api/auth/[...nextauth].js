import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const fetchAllEmployee = async () => {
  const { data } = await axios.get(`${process.env.BASE_URL}/api/getAllEmployee`);
  return data;
}

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
      const data = await fetchAllEmployee();
      if (data.find((i) => i.fields.email == user.email)) {
        return true;
      } else {
        const formData = {
          name: user.name,
          email: user.email,
          photo: user.image,
          status: "Active"
        }
        fetch(`${process.env.BASE_URL}/api/createEmployee`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });
        return true;
      }
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
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