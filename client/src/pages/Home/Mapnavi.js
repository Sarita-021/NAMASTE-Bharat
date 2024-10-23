import React from "react";
import { useNavigate } from "react-router-dom";

function Mapnavi() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Maplive"); // Redirect to the /map page
  };

  return (
    <div className="relative w-full h-[500px] group mb-2">
      {/* Background image */}
      <img
        className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-100 rounded-lg"
        src="/home-img/mapss.png"
        alt="Charminar"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <div className="text-center">
          {/* Title */}
          <h3 className="text-2xl text-white font-semibold mb-4 transition-transform duration-500 transform translate-y-10 group-hover:translate-y-0">
            View on Map
          </h3>

          {/* Button */}
          <button
            onClick={handleNavigation}
            className="text-white px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg"
          >
            Go to Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mapnavi;
