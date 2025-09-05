import mongoose from "mongoose";

export default async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error connecting to the MongoDb Database");
  }
}
