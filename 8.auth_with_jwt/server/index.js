import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import dns from "dns";
import { connectDB } from "./Utils/mongodb.js";

import UserRoute from "./Routes/user.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/v1/user", UserRoute);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});

// localhost:5050/v1/user/createuser
