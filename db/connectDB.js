import mongoose from "mongoose";
import colors from 'colors';

const DB_NAME = 'contact-management';

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}${DB_NAME}`);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`.bgYellow);
    } catch (error) {
        console.log('MONGODB connection failed',error);
        process.exit(1);
    }
}

export {connectDB}