import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">Namaste Bharat </a>
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8 text-sm">
          <a
            href="#home"
            className="font-semibold text-black border-b-2 border-blue-500 pb-1"
          >
            Home
          </a>
          <a
            href="#staycation"
            className="text-gray-500 hover:text-black transition"
          >
            Staycation
          </a>
          <a
            href="#experience"
            className="text-gray-500 hover:text-black transition"
          >
            Experience
          </a>
          <a
            href="#about"
            className="text-gray-500 hover:text-black transition"
          >
            About Us
          </a>
        </div>

        {/* Login/Register */}
        <div className="flex items-center space-x-6">
          <a
            href="#login"
            className="text-gray-500 hover:text-black transition"
          >
            Login
          </a>
          <a
            href="#register"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
