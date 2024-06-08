import { Link, useNavigate } from "react-router-dom";

import logo from "../../../public/img/logo.png";
import { CiMenuBurger } from "react-icons/ci";

function Header({ isAuthorized }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (isAuthorized) {
      navigate("/home");
    } else {
      // Redirect to login or show a message indicating authorization is required
    }
  };

  return (
    <>
      <div className="flex header1 justify-center gap-60 items-center Class Properties mt-1 shadow py-2 fixed bg-white">
        <div className="w-52">
          <Link to={"/home"} onClick={handleHomeClick}>
            <img src={logo} />
          </Link>
        </div>
        <ul className="flex displayinvisible gap-6 font-medium">
          {isAuthorized && (
            <Link to={"/home"}>
              <li>Home</li>
            </Link>
          )}
          <li>How it Works</li>
          <button className="bg-blue-600 py-1 text-white px-14 rounded-sm">
            Sign In
          </button>
        </ul>
        <div className="hidden displayvisible ">
          <CiMenuBurger />
        </div>
      </div>
    </>
  );
}

export default Header;
