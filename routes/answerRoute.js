const express = require("express");
const router = express.Router();
const {
  getAllanswers,
  giveAnswers,
} = require("../controller/answersController");
// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

router.post("/all-answers", authMiddleware, getAllanswers);
router.post("/give-answers", authMiddleware, giveAnswers);

module.exports = router;
