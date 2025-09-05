import ConnectDb from "./utils/database.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/url.js";

dotenv.config();
const app = express();

app.use(express.json());
const PORT = 9090;
app.use(cors());

ConnectDb();

app.use("/", router);

app.listen(PORT, (req, res) => {
  console.log(`Server is runing ${PORT}`);
});
