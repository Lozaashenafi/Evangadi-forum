import { query } from "../db/dbConfige.js";
import { StatusCodes } from "http-status-codes";
import { v4 as uuidv4 } from "uuid";

async function getAllQuestion(req, res) {
  try {
    const [questions] = await query(`
      SELECT 
        q.*,
        (SELECT username FROM users WHERE userid = q.userid) AS username
      FROM questions q
    `);
    return res.json(questions);
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
    const [existingQuestion] = await query(
      "SELECT * FROM questions WHERE title = ?",
      [title]
    );
    if (existingQuestion.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Question with this title already exists" });
    }

    // Insert new question into the database
    const created = await query(
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
async function searchQuestions(req, res) {
  const keyword = req.params.id;
  if (!keyword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Keyword is required for search" });
  }

  try {
    const [questions] = await query(
      `
    SELECT *, (SELECT username FROM users WHERE userid = q.userid) AS username
FROM questions q
WHERE title LIKE ? OR tag LIKE ?

    `,
      [`%${keyword}%`, `%${keyword}%`]
    );
    // console.log(questions);
    return res.json(questions);
  } catch (error) {
    console.error(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again later!" });
  }
}

export default { getAllQuestion, askQuestion, searchQuestions };
