import "../css/header.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLanguage, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
      <nav className="navbar h-32 bg-slate-800 flex items-center justify-between px-5 xl:px-10 xl:h-20 sticky top-0 z-50 w-screen">
        <div className="flex items-center">
          <div id="logo" className="text-white font-bold text-nowrap mr-5 text-2xl text-center py-2">
            NAMASTE-Bharat
          </div>
        </div>
        <div className="flex items-center content-center relative w-full xl:w-auto  xl:mx-5">
          <input
            className="rounded-lg px-3 py-2 xl:py-1 pr-8 text-gray-950 outline-none w-full xl:w-44"
            placeholder="Search Destination"
            type="text"
          />
          <FontAwesomeIcon
            className="text-gray-800 ml-2 absolute right-3 align-middle py-2        "
            icon={faMagnifyingGlass}
            // shake
            rotation={90}
          />
        </div>
        <button className="text-white text-3xl xl:hidden ml-4 relative z-10" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>


        {/* ---------------------------------------responsive-div -------------------------- */}


        <div className={`fixed z-20 top-0 left-0 w-full h-full bg-slate-800 flex flex-col items-center justify-center transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} xl:static xl:flex xl:flex-row xl:items-center xl:justify-between xl:translate-x-0`}>
        <button className="text-white text-3xl xl:hidden ml-4 relative z-10" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
          <div className="flex flex-col xl:flex-row items-center">
            <NavLink className="mx-3 text-white my-2 xl:my-0" to="/">
              Explore
            </NavLink>
            <NavLink className="mx-3 text-white my-2 xl:my-0" to="/about">
              About
            </NavLink>
            <NavLink className="mx-3 text-white my-2 xl:my-0" to="/calendar">
              Calendar
            </NavLink>
            <NavLink className="mx-3 text-white my-2 xl:my-0" to="/shop">
              Shop
            </NavLink>
          </div>
          <div className="flex flex-col xl:flex-row items-center">
            <div className="mx-4 flex items-center my-2 xl:my-0">
              <FontAwesomeIcon className="text-white text-3xl mr-2" icon={faLanguage} />
              <select className="rounded-md bg-slate-700 text-white py-1 px-2">
                <option value="English">En</option>
                <option value="Hindi">Hin</option>
                <option value="Bengali">Ben</option>
              </select>
            </div>
            <div className="flex flex-col xl:flex-row items-center text-white my-2 xl:my-0">
              <Link className="mx-3" to="/login">
                Login
              </Link>
              <Link className="bg-white text-gray-900 px-2 py-1 rounded m-1" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
    );
}

export default Header;
