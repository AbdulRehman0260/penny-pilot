import express from "express";
import {
  login,
  signup,
  logout,
  checkAuth,
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

//post requests

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.get("/check", protectRoute, checkAuth);

export default router;
