import React from "react";
import LayOut from "../../components/layOut/LayOut";
import profile from "../../../public/img/profile.jpg";
import { Link } from "react-router-dom";

function Answer() {
  return (
    <>
      <LayOut>
        <div className="w-3/4 mx-auto mb-7">
          <div className="mt-9 mb-4">
            <h2 className="font-semibold text-xl pb-1  ">Question</h2>
            <p>what is ...</p>
            <p className="text-sm text-slate-500">description</p>
          </div>
          <div className="py-2 border-y-2">
            <h1 className="text-xl font-semibold">Answer From The Community</h1>
          </div>
          <div className="flex gap-6 ">
            <div>
              <div className="w-24">
                <img src={profile} alt="" />
              </div>
              <h2 className="text-center">user name</h2>
            </div>
            <div className="flex w-11/12 justify-between items-center">
              <p>what is ...</p>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-center mb-5 ">
            Answer The Top Question
          </h1>
          <div className=" text-center mb-3">
            <Link to={"/home"} className="text-sm text-slate-500">
              Go to Question page
            </Link>
          </div>
          <div className="flex justify-center">
            <textarea
              className="textareas border-2 w-11/12 mx-auto h-28  focus:border-slate-400 mb-6 rounded-lg p-2"
              type="text"
              name=""
              id=""
              placeholder="your answer ..."
            ></textarea>
          </div>
          <div className=" w-11/12 mx-auto">
            <button className="bg-blue-600 py-1 text-white px-14 rounded-sm">
              Post Your Answer
            </button>
          </div>
        </div>
      </LayOut>
    </>
  );
}

export default Answer;
