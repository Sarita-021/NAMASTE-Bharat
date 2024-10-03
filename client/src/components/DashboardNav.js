
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/header.css'
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar h-32 bg-slate-800 flex items-center justify-between px-5 md:px-10 md:h-20">
        <div className="flex items-center">
          <div
            id="logo"
            className="text-white font-bold text-nowrap mr-5 text-2xl text-center py-2"
          >
            NAMASTE-Bharat
          </div>
        </div>
        <div className="flex items-center content-center relative w-full md:w-auto">
          <input
            className="rounded-lg px-3 py-2 md:py-1 pr-8 text-gray-950 outline-none w-full md:w-44"
            placeholder="Search Destination"
            type="text"
          />
          <FontAwesomeIcon
            className="text-gray-800 ml-2 absolute right-3 align-middle py-2        "
            icon={faMagnifyingGlass}
            // fade
            rotation={90}
          />
        </div>
        <button
          className="text-white text-3xl md:hidden ml-4 relative z-10"
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="mx-4 flex items-center my-2 md:my-0">
              <FontAwesomeIcon
                className="text-white text-2xl mr-2"
                icon={faBell}
                shake
              />
            </div>
            <div className="flex flex-col md:flex md:flex-row items-center text-white my-2 md:my-0">
              <Link
                className=" text-gray-900 px-2 py-1 rounded m-1"
                to="/register"
              >
                <img
                   className="min-w-12 h-12  rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashboardNav;
