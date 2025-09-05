import express from "express";

const app = express();
const PORT = 8080;

// middleware to prse JSON request body
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Corsair HS45 Headphone",
    price: 4500,
    imageUrl: "https://techmatched.pk/wp-content/uploads/2024/05/4-13.png",
    desc: "A comfortable and high-quality gaming headset.",
  },
  {
    id: 2,
    name: "RTX 3060",
    price: 93000,
    imageUrl:
      "https://static.webx.pk/files/2603/Images/14-czone.com.pk-1540-12831-250122082031-2603-2261410-231124021614482.jpg",
    desc: "A powerful graphics card from nvidia.",
  },
];

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// upload new product
app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// edit existing product
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { newProduct } = req.body;

  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...newProduct };
    res.json(products[index]);
  } else {
    res.status(400).json({ message: "Product not found with this id " });
  }
});

// delete product by id
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== parseInt(id));
  res.status(200).json({ message: "Product deleted successfully", products });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is runing On Port ${PORT}`);
});
