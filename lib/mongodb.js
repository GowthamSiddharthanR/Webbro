import mongoose from "mongoose";
export const connectMongoDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected");
    } catch (error) {
        console.log("error while connecting to database",error)
    }
}