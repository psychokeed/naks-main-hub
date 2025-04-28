import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Atlas connected successfully!");
    }
    catch (error) {
        console.error("❌ MongoDB connection failed:", error);
    }
};
export default connectDB;
