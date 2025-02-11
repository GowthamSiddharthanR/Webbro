import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import { connectMongoDb } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
    pages: {
        signIn: "/",
    },

    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectMongoDb();
                    const user = await User.findOne({ email });
                    if (!user) {
                        return null;
                    }
                    const passwordCompare = await bcrypt.compare(password, user.password);
                    if (!passwordCompare) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error:", error)
                    return null;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    
   
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };