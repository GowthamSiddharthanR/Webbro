import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
           
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            default: false, // Initially, set to false
        },
        verificationToken: {
            type: String, // Token for email verification
        },
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;
