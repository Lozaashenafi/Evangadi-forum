const dbConnection = require("../db/dbConfige");
const { StatusCodes } = require("http-status-codes");

async function getAllanswers(req, res) {
  const { questionid } = req.body;
  try {
    const answers = await dbConnection.query(
      "SELECT * FROM answers WHERE questionid = ?",
      [questionid]
    );
    return res.json(answers[0]);
  } catch (error) {
    console.error(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong, try again later!" });
  }
}
async function giveAnswers(req, res) {
  const { userid, answer, questionid } = req.body;
  if (!userid || !answer || !questionid) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all required information" });
  }
  const [questioner] = await dbConnection.query(
    "SELECT userid FROM questions WHERE questionid = ? ",
    [questionid]
  );
  //   console.log(userid);
  if (questioner[0].userid == userid) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "you ask the question" });
  }
  const created = await dbConnection.query(
    "INSERT INTO answers (userid, answer,  questionid) VALUES (?, ?, ?)",
    [userid, answer, questionid]
  );
  return res.status(StatusCodes.CREATED).json({ msg: "successfull" });
  //   return res.send(questioner[0]);
}
module.exports = { getAllanswers, giveAnswers };
