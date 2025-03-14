import { NextResponse } from 'next/server';
import { connectMongoDb } from '../../../../lib/mongodb';
import User from '../../../../models/user';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get('token');

        if (!token) {
            return NextResponse.json({ message: "Invalid token" }, { status: 400 });
        }

        await connectMongoDb();

        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
        }

        user.verified = true;
        user.verificationToken = undefined;
        await user.save();

        // Redirect to login page
        return NextResponse.redirect(new URL('/login', req.url));

    } catch (error) {
        console.error("Verification error:", error);
        return NextResponse.json({ message: "Verification failed" }, { status: 500 });
    }
}
