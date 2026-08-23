import ConnectDb from "./utils/database.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/url.js";
import dns from "dns";

dotenv.config();
const app = express();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

app.use(express.json());
const PORT = 9090;
app.use(cors());

ConnectDb();

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`Server is runing ${PORT}`);
});
