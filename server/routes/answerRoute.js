import { Router } from "express";
const router = Router();
import answerController from "../controller/answersController.js";
// authentication middleware
import authMiddleware from "../middleware/authMiddleware.js";

router.get("/:id", answerController.getAllanswers);
router.post("/give-answers", answerController.giveAnswers);

export default router;
