import express from "express";
import {
  getAllProducts,
  deleteProductById,
  editProductById,
  postProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", postProduct);
router.put("/:id", editProductById);
router.delete("/:id", deleteProductById);

export default router;
