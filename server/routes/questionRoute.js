import { Router } from "express";
const router = Router();
import questionController from "../controller/questionsController.js";
// authentication middleware
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/all-questions", authMiddleware, questionController.getAllQuestion);
router.post("/ask-question", authMiddleware, questionController.askQuestion);
router.get("/:id", authMiddleware, questionController.searchQuestions);

export default router;
