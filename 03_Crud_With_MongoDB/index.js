import Product from "./models/Products.js";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 8080;
app.use(cors());

// function to connect mongodb
async function ConnectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Database connected Successfully");
  } catch (error) {
    console.log("Error connecting to the mongoDB", error);
  }
}

ConnectDb();

// get all products form database
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log("Error While Fetching Products");
    res.status(500).send({ message: "Error fetching products" });
  }
});

// upload poduct to the database
app.post("/products", async (req, res) => {
  try {
    const newProductFields = req.body;
    const newProduct = await Product(newProductFields);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error While Posting Products");
    res.status(500).send({ message: "Error Posting products" });
  }
});

// delete products from database
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndDelete({ id: id }); // findOneAndDelete delete from custom field
    // await Product.findByIdAndDelete(req.params.id); // findByIdAndDelete delete by mongo genrated id
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ message: "Error deleting products" });
  }
});

// edit existing product from database
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProductsField = req.body;
    const updatedProduct = await Product.findOneAndUpdate(
      { id },
      updatedProductsField,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).send({ message: "Error editing product" });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Server is runing at ${PORT}`);
});
