import Product from "../models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

const postProduct = async (req, res) => {
  try {
    const newProductsFields = req.body;
    const newProduct = new Product(newProductsFields);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error posting products" });
  }
};

const editProductById = async (req, res) => {
  try {
    const { id } = req.body;
    const updatedProductsField = req.body;
    const updatedProduct = await Product.findOneAndUpdate(
      { id },
      updatedProductsField,
      { new: true }
    );
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error editing products", error: error });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.body;
    await Product.findOneAndDelete({ id });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting products", error: error });
  }
};

export { getAllProducts, postProduct, editProductById, deleteProductById };
