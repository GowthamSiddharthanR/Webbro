import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";
import { connectMongoDb } from '../../../../lib/mongodb';
import User from '../../../../models/user';


export async function POST(req) { 
    try {
        console.log("entered")
        const{name,email,password}=await req.json();
        const hashPassword=await bcrypt.hash(password,10);
        await connectMongoDb();
        await User.create({name,email,password:hashPassword});
        return NextResponse.json({message:"Registered success"},{status: 201 });
    } catch (error) {
        return NextResponse.json({message:"error ocurred while register"},{status: 500 });
    }
}
