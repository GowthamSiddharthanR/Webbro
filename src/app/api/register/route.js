import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";
import { connectMongoDb } from '../../../../lib/mongodb';
import User from '../../../../models/user';
import sendVerificationEmail from '../../../../lib/sendVerificationEmail';
import crypto from 'crypto';

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        await connectMongoDb();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "Email already registered" }, { status: 400 });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString("hex");

        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            verificationToken,
        });

        await sendVerificationEmail(email, verificationToken);

        return NextResponse.json({ message: "Registered successfully! Please verify your email." }, { status: 201 });

    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({ message: "Error during registration" }, { status: 500 });
    }
}
