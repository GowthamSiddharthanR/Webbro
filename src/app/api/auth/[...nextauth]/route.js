import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { connectMongoDb } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";
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
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            console.log(user);
            console.log(account);
            if (account.provider === "google") {
                const { name, email } = user;
                try {
                    await connectMongoDb();
                    const userExists= await googleUser.findOne({email});
                    if(!userExists){
                        const res = await fetch("/api/googleUser", {
                            method: "POST",
                            header: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            }),
                        });
                        if (res.ok) {
                            return user;
                        }
                    }
                   
                } catch (error) {
                    console.log(error)
                }
            }
            return user;
        }

    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,


};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };