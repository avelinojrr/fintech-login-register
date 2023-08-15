import mongoose from "mongoose";

// connect to database
export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/fintechDB01");
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};