import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  addItem,
  getItems,
  deleteItem,
  updateItem,
} from "../controllers/wishlist.controllers.js";

const router = express.Router();

router.post("/add-item", protectRoute, addItem);
router.get("/get-items", protectRoute, getItems);
router.delete("/delete-item/:id", protectRoute, deleteItem);
router.patch("/update-item/:id", protectRoute, updateItem);

export default router;
