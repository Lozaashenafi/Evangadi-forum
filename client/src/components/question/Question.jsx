import React from "react";
import profile from "../../../public/img/profile.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Question() {
  return (
    <>
      <Link to={"./answer"}>
        <div className="flex gap-6 border-b-2">
          <div>
            <div className="w-24">
              <img src={profile} alt="" />
            </div>
            <h2 className="text-center">user name</h2>
          </div>
          <div className="flex w-11/12 justify-between items-center">
            <p>what is ...</p>
            <IoIosArrowForward />
          </div>
        </div>
      </Link>
      <div className="flex gap-6 border-b-2">
        <div>
          <div className="w-24">
            <img src={profile} alt="" />
          </div>
          <h2 className="text-center">user name</h2>
        </div>
        <div className="flex w-11/12 justify-between items-center">
          <p>what is ...</p>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex gap-6 border-b-2">
        <div>
          <div className="w-24">
            <img src={profile} alt="" />
          </div>
          <h2 className="text-center">user name</h2>
        </div>
        <div className="flex w-11/12 justify-between items-center">
          <p>what is ...</p>
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
}

export default Question;
