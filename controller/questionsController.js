const dbConnection = require("../db/dbConfige");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");

async function getAllQuestion(req, res) {
  try {
    const questions = await dbConnection.query("SELECT * FROM questions");
    return res.json(questions[0]);
  } catch (error) {
    console.error(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again later!" });
  }
}

async function askQuestion(req, res) {
  const { title, description, userid, tag } = req.body;
  if (!title || !description || !userid) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all required information" });
  }

  try {
    // Generate random question ID
    const questionId = uuidv4();

    // Check if the question already exists
    const [existingQuestion] = await dbConnection.query(
      "SELECT * FROM questions WHERE title = ?",
      [title]
    );
    if (existingQuestion.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Question with this title already exists" });
    }

    // Insert new question into the database
    const created = await dbConnection.query(
      "INSERT INTO questions (title, description, userid, tag, questionid) VALUES (?, ?, ?, ?, ?)",
      [title, description, userid, tag, questionId]
    );

    return res.status(StatusCodes.CREATED).json({ msg: "successfull" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again later!" });
  }
}

module.exports = { getAllQuestion, askQuestion };
