import mongoose from "mongoose";

// define user schema
const userSchema = new mongoose.Schema({
    username: {
        username: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        email: String,
        required: true,
        unique: true,
        trim: true,

    },
    password: {
        password: String,
        required: true
    } 
});

export default mongoose.model("User", userSchema);