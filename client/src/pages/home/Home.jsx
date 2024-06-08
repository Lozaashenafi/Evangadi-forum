import { useContext } from "react";
import { appState } from "../../App";
import LayOut from "../../components/layOut/LayOut";
import Question from "../../components/question/Question";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(appState);
  // console.log(user); // Make sure user is populated
  return (
    <LayOut>
      <section>
        <div className="w-3/4 mx-auto">
          <div className="flex justify-between mt-11">
            <Link
              to={"/home/question"}
              className="bg-blue-600 py-1 text-white px-14 rounded-sm"
            >
              Ask Question
            </Link>
            <h2 className="font-medium text-lg">welcome: {user.username}</h2>
          </div>

          <div className="mt-9">
            <h2 className="font-medium text-lg pb-6 border-b-2 ">Questions</h2>
          </div>
          <Question />
        </div>
      </section>
    </LayOut>
  );
}

export default Home;
