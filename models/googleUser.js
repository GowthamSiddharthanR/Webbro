import mongoose ,{Schema,models} from "mongoose";

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
   
},{timestamps:true})

const googleUser = models.googleUser || mongoose.model("googleUser",userSchema)

export default googleUser;