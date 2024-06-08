import React from "react";
import LayOut from "../../components/layOut/LayOut";
import { Link } from "react-router-dom";

function AddQuestion() {
  return (
    <>
      <LayOut>
        <section>
          <div className="mb-10 mt-5">
            <h1 className="font-semibold text-xl pb-1 text-center">
              Stape to Write a good question
            </h1>
            <div className="flex justify-center mb-7">
              <ul>
                <li className="list-disc">
                  Summerize your problem in one line title.
                </li>
                <li className="list-disc">
                  Describe your problem in more details.
                </li>
                <li className="list-disc">
                  DEscribe what you tried and what you expected to happen.
                </li>
                <li className="list-disc">
                  Review your question and post it to the site.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-xl pb-1 text-center">
                Choose type for Your Question:
              </h2>
              <form className="flex  justify-center gap-20 mt-6">
                <div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reactTag"
                    name="tags"
                    value="React"
                  />
                  <label for="reactTag">React</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reactRouterTag"
                    name="tags"
                    value="React Router"
                  />
                  <label for="reactRouterTag">React Router</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="axiosTag"
                    name="tags"
                    value="Axios"
                  />
                  <label for="axiosTag">Axios</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="fetchAPITag"
                    name="tags"
                    value="Fetch API"
                  />
                  <label for="fetchAPITag">Fetch API</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reduxTag"
                    name="tags"
                    value="Redux"
                  />
                  <label for="reduxTag">Redux</label>
                  <br />
                </div>
                <div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="nodeJSTag"
                    name="tags"
                    value="Node.js"
                  />
                  <label for="nodeJSTag">Node.js</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="expressTag"
                    name="tags"
                    value="Express.js"
                  />
                  <label for="expressTag">Express.js</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="mysqlTag"
                    name="tags"
                    value="MySQL"
                  />
                  <label for="mysqlTag">MySQL</label>
                  <br />

                  <input
                    className="checkbox"
                    type="checkbox"
                    id="otherTag"
                    name="tags"
                    value="Other"
                  />
                  <label for="otherTag">Other</label>
                  <br />
                </div>
              </form>
            </div>
            <h1 className="text-xl font-semibold text-center mb-5 mt-3">
              Ask a public question
            </h1>
            <div className="text-center mb-3">
              <Link to={"/home"} className="text-sm text-slate-500  ">
                Go to Question page
              </Link>
            </div>
            <div className="flex justify-center">
              <input
                className="textareas border-2 w-9/12 mx-auto h-10  focus:border-slate-400 mb-6 rounded-lg p-2"
                type="text"
                name=""
                id=""
                placeholder="Title"
              ></input>
            </div>
            <div className="flex justify-center">
              <textarea
                className="textareas border-2 w-9/12 mx-auto h-28  focus:border-slate-400 mb-6 rounded-lg p-2"
                type="text"
                name=""
                id=""
                placeholder="Question description..."
              ></textarea>
            </div>
            <div className=" w-9/12 mx-auto">
              <button className="bg-blue-600 py-1 text-white px-14 rounded-sm">
                Post Your Answer
              </button>
            </div>
          </div>
        </section>
      </LayOut>
    </>
  );
}

export default AddQuestion;
