import express from "express";

const app = express();
const PORT = 8080;

app.listen(PORT, (req, res) => {
  console.log(`Server is runing On Port ${PORT}`);
});
