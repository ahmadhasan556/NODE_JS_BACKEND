import mongoose from "mongoose";

export default async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Databse connected ");
  } catch (error) {
    console.log("Error connecting to the database");
  }
}
