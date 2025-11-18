import { Router } from "express";
const router = Router();
// authonthication middlewre
import authMiddleware from "../middleware/authMiddleware.js";

// user controler
import userController from "../controller/userController.js";

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/check", authMiddleware, userController.checkuser);

export default router;
