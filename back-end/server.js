import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";



const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running at http://localhost:"+PORT);
});

