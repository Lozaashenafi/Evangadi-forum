const express = require("express");
const router = express.Router();
const {
  getAllQuestion,
  askQuestion,
} = require("../controller/questionsController");
// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

router.get("/all-questions", authMiddleware, getAllQuestion);
router.post("/ask-question", authMiddleware, askQuestion);

module.exports = router;
