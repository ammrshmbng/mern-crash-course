import express from "express";
const router = express.Router();
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { getProducts } from "../controllers/product.controller.js";

router.get("/", getProducts);

router.post("/", async (req, res) => {
    const product = req.body; // user will send this data
  
    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({ success: false, message: "Please provide all fields" });
    }
  
    const newProduct = new Product(product);
  
    try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      console.error("Error in Create product:", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  });

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