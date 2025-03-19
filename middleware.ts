import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    async authorized({ token }) {
      if (!token) return false; // Not authorized if no token
      return !!token;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/"],
};
