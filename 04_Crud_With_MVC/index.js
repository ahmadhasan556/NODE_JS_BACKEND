import ConnectDb from "./utils/database.js";
import router from "./routes/product.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 8080;
app.use(cors());

ConnectDb();

app.use("/products", router);

app.listen(PORT, (req, res) => {
  console.log(`server is runing at ${PORT}`);
});
