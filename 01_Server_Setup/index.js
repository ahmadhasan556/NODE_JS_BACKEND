import express from "express";
const app = express();
const PORT = 8080;

// get route
app.get("/", (req, res) => {
  res.send("Welcome to node js class");
});

// percentage calculator
app.get("/percentage-calculator", (req, res) => {
  const { obtMarks, totalMarks } = req.query;
  // check validation
  if (!obtMarks || !totalMarks) {
    res
      .status(400)
      .send("Error: Please provide both Obtain Marks and Totoal Marks");
  }
  // convert to numbers
  const obt = Number(obtMarks);
  const total = Number(totalMarks);
  // check validation of numbers
  if (isNaN(obt) || isNaN(total) || total <= 0) {
    res
      .status(400)
      .send(
        "Error: Please provide valid numeric values. TotalMarks must be greater than 0."
      );
  }
  // calculate percentage
  const percentage = (obt / total) * 100;
  res.send(`Your Percentage is ${percentage.toFixed(2)}`);
});

app.listen(PORT, () => {
  console.log(`Server is runing on PORT ${PORT}`);
});
