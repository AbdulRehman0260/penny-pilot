import express from "express";
import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transactions.routes.js";
import goalRoutes from "./routes/goal.routes.js";
import wishListRoutes from "./routes/wishlist.routes.js";
import dotenv from "dotenv";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

//create an app express object
const app = express();

//App use
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Add this line for cookie parsing
app.use("/api/auth", authRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/goal", goalRoutes);
app.use("/api/wishlist", wishListRoutes);

const PORT = process.env.PORT;

//App backend listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
