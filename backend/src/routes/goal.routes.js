import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  addGoal,
  deleteGoal,
  getGoals,
  updateGoal,
} from "../controllers/goal.controllers.js";

const router = express.Router();

//post requests

router.post("/add-goal", protectRoute, addGoal);
router.delete("/delete-goal/:id", protectRoute, deleteGoal);
router.get("/get-goals", protectRoute, getGoals);
router.patch("/update-goal/:id", protectRoute, updateGoal);

export default router;
