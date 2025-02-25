import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDb } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";
import googleUser from "../../../../../models/googleUser";

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
                        throw new Error("Invalid credentials");
                    }

                    if (!user.verified) {
                        throw new Error("Please verify your email before logging in.");
                    }

                    const passwordCompare = await bcrypt.compare(password, user.password);
                    if (!passwordCompare) {
                        throw new Error("Invalid credentials");
                    }

                    return user;
                } catch (error) {
                    console.log("Error:", error.message);
                    throw new Error(error.message); // Send error message to the frontend
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "google") {
                const { name, email } = user;
                try {
                    await connectMongoDb();
                    const userExists = await googleUser.findOne({ email });
                    if (!userExists) {
                        const baseUrl = process.env.BASE_URL;
                        const res = await fetch(`${baseUrl}/api/googleUser`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ name, email }),
                        });
                        if (res.ok) return user;
                    }
                } catch (error) {
                    console.log("Google SignIn Error:", error);
                }
            }
            return user;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
