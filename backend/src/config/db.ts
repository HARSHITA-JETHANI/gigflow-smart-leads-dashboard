import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string); //use of as string for ts to trust it as string type

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
    process.exit(1); //Stops app if DB fails
  }
};

export default connectDB;