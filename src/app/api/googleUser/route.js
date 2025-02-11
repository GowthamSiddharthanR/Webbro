import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../lib/mongodb";
import User from "../../../../models/googleUser";


export async function POST(request){
    const{name,email}=await request.json();
    await connectMongoDb();
    await User.create({name,email});
    return NextResponse.json({message:"user Registered"},{status:201});
}