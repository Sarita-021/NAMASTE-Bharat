import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faTiktok,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 px-4 md:px-16 ">
      <div className="max-w-7xl mx-auto ml-2 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand and Mission Section */}
        <div className="col-span-1">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">NAMASTE-Bharat</h1>
          </div>
          <p className="text-gray-400">
            This platform dedicated to celebrating India's rich cultural
            heritage. Learn traditional skills like dance and singing, and
            explore diverse cultures across the country.
          </p>
        </div>

        {/* Links Sections */}

        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">About</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-400 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-gray-400 hover:text-white">
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 ">
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/return" className="text-gray-400 hover:text-white">
                Return
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter and Social Links */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Get Updates</h2>
          <form className="flex bg-gray-700 rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-gray-700 text-white border-none rounded-l focus:outline-none w-full"
            />

            <button
              type="submit"
              className="bg-white text-black px-4 rounded-lg font-semibold hover:bg-gray-200 m-1"
            >
              Subscribe
            </button>
          </form>

          {/* Social icons */}
          <div className="flex space-x-3 mt-6  sm:space-x-5">
            <Link
              to="/insta"
              className="text-white bg-gray-700 p-4 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />{" "}
              {/* Icon size set to lg */}
            </Link>
            <Link
              to="/twitter"
              className="text-white bg-gray-700 p-4 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />{" "}
              {/* Icon size set to lg */}
            </Link>
            <Link
              to="/facebook"
              className="text-white bg-gray-700 p-4 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />{" "}
              {/* Icon size set to lg */}
            </Link>
            <Link
              to="/discord"
              className="text-white bg-gray-700 p-4 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faDiscord} size="lg" />{" "}
              {/* Icon size set to lg */}
            </Link>
            <Link
              to="/tiktok"
              className="text-white bg-gray-700 p-4 rounded-full hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faTiktok} size="lg" />{" "}
              {/* Icon size set to lg */}
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright and Privacy */}
      <div className="mt-5 pt-6 flex justify-between text-gray-400">
        <p>©2024 Namaste Bharat. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
