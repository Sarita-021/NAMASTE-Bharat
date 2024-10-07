import "../css/header.css";
import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLanguage,
  faBars,
  faTimes,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let isLogin = localStorage.getItem("isLogin");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    try {
      localStorage.clear();
      toast.success("Logout Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar h-32 bg-slate-800 flex items-center justify-between px-5 xl:px-10 xl:h-20 sticky top-0 z-50 w-full ">
        <div className="flex items-center">
          <div
            id="logo"
            className="text-white font-bold text-nowrap mr-5 text-2xl text-center py-2"
          >
            <Link to="/">NAMASTE-Bharat</Link>
          </div>
        </div>
        <div className="flex items-center content-center relative w-full xl:w-auto xl:mx-5">
          <input
            className="rounded-lg px-3 py-2 xl:py-1 pr-8 text-gray-950 outline-none w-full xl:w-44"
            placeholder="Search Destination"
            type="text"
          />
          <FontAwesomeIcon
            className="text-gray-800 ml-2 absolute right-3 align-middle py-2"
            icon={faMagnifyingGlass}
            rotation={90}
          />
        </div>
        <button
          className="text-white text-3xl xl:hidden ml-4 relative z-10"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* ---------------------------------------responsive-div -------------------------- */}

        <div
          className={`fixed z-20 top-0 left-0 w-full h-full bg-slate-800 flex flex-col items-center justify-center transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:flex md:flex-row md:items-center md:justify-between md:translate-x-0`}
        >
          <button
            className="text-white text-3xl md:hidden ml-4 relative z-10"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <div className="flex flex-col md:flex-row items-center">
            <NavLink className="mx-3 text-white my-2 md:my-0" to="/">
              Explore
            </NavLink>
            <NavLink className="mx-3 text-white my-2 md:my-0" to="/about">
              About
            </NavLink>
            <NavLink className="mx-3 text-white my-2 md:my-0" to="/calendar">
              Calendar
            </NavLink>
            <NavLink className="mx-3 text-white my-2 md:my-0" to="/shop">
              Shop
            </NavLink>
          </div>

          {isLogin && (
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="mx-4 flex items-center my-2 md:my-0">
                <FontAwesomeIcon
                  className="text-white text-2xl mr-2"
                  icon={faBell}
                />
              </div>
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  className="text-gray-900 px-2 py-1 rounded m-1 cursor-pointer"
                  to="/profile"
                >
                  <img
                    className="min-w-12 h-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="profile"
                  />
                </NavLink>

                {/* Show Profile and Logout options on hover */}
                {isHovered && (
                  <div className="absolute top-20 right-0 bg-white shadow-md rounded-lg py-2 w-32 text-center z-50">
                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Profile
                    </NavLink>
                    <NavLink
                      onClick={handleLogout}
                      to="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Logout
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          )}

          {!isLogin && (
            <div className="flex flex-col md:flex-row items-center">
              <div className="mx-4 flex items-center my-2 md:my-0">
                <FontAwesomeIcon
                  className="text-white text-3xl mr-2"
                  icon={faLanguage}
                />
                <select className="rounded-md bg-slate-700 text-white py-1 px-2">
                  <option value="English">En</option>
                  <option value="Hindi">Hin</option>
                  <option value="Bengali">Ben</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row items-center text-white my-2 md:my-0">
                <NavLink className="mx-3" to="/login">
                  Login
                </NavLink>
                <NavLink
                  className="bg-white text-gray-900 px-2 py-1 rounded m-1"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
