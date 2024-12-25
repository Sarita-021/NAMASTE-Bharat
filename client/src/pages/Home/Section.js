import React, { useState } from "react";

const Section = () => {
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    console.log("hello ");
    setMuted(!muted);
  };

  return (
    <>
      {" "}
      <section className="relative h-80vh w-90vw mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-2xl">
          <video
            className="w-full h-full object-cover rounded-2xl"
            src="/videos/india1.mp4"
            autoPlay
            muted={muted}
            loop
            playsInline
          ></video>
          <button
            onClick={toggleAudio}
            className="absolute top-4 z-20 right-4 bg-white text-black px-4 py-2 rounded-md shadow-md"
          >
            {muted ? "Turn Audio On" : "Turn Audio Off"}
          </button>
        </div>

        {/* Overlay for darker effect */}
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center items-start h-full px-4"></div>

        {/* Search Bar - Positioned at the bottom, half inside and half outside the image */}
        <div className="relative z-20 w-full max-w-7xl mx-auto -mt-20">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            {/* Tab Navigation */}
            <div className="flex space-x-8 text-sm mb-4">
              <a
                href="#staycation"
                className="font-semibold text-black border-b-2 border-blue-500 pb-1"
              >
                Book Vacations
              </a>
              {/* <a
                href="#experience"
                className="text-gray-500 hover:text-black transition"
              >
                Experiences
              </a> */}
            </div>

            {/* Search Inputs - All in one line */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Where */}
              <div className="flex-1">
                <label className="block text-gray-500 mb-1">Where?</label>
                <input
                  type="text"
                  placeholder="Search location here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* When */}
              <div className="flex-1">
                <label className="block text-gray-500 mb-1">When?</label>
                <input
                  type="text"
                  placeholder="Add dates here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* Who */}
              <div className="flex-1">
                <label className="block text-gray-500 mb-1">Who?</label>
                <input
                  type="text"
                  placeholder="Add guests here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>

              {/* Search Button */}
              <div className="sm:w-auto pt-5 ">
                <button className="bg-blue-600 text-white  px-6 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // section 2 starts */}
      <br />
      <br />
      <br />
    </>
  );
};

export default Section;
