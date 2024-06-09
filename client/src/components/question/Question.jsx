import React, { useEffect, useState } from "react";
import profile from "../../../public/img/profile.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig";

function Question() {
  const token = localStorage.getItem("token");
  const [questions, setQuestions] = useState([]);

  async function getAllQuestions() {
    try {
      const data = await axios.get("/questions/all-questions", {
        headers: {
          Authorization: "Bearer " + token,
        },
        params: {
          sort: "id",
          order: "desc",
        },
      });
      const sortedQuestions = data.data.sort((a, b) => b.id - a.id);
      setQuestions(sortedQuestions);
      console.log(sortedQuestions);
      console.log(data.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <>
      {questions &&
        questions.map((question) => (
          <Link
            to={`./answer/${question.questionid}`}
            key={question.questionid}
          >
            <div className="flex gap-6 border-b-2" key={question.questionid}>
              <div>
                <div className="w-24">
                  <img src={profile} alt="" />
                </div>
                <h2 className="text-center">{question.username}</h2>
              </div>
              <div className="flex w-11/12 justify-between items-center">
                <p>{question.title}</p>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

export default Question;
