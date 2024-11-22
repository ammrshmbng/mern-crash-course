import express from "express";
const router = express.Router();
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;