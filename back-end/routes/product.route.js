import express from "express";
const router = express.Router();
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { createProduct, getProducts } from "../controllers/product.controller.js";

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
      res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server Error" });
    }
  });

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });
      } catch (error) {
        res.status(404).json({ success: false, message: "Product not found" });
      }
  });

export default router;