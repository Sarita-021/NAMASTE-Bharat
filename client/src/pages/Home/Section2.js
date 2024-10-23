import React, { useRef } from "react";

const Section2 = () => {
  const scrollRef = useRef(null);

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Adjust this value based on how much you want to scroll with each click
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-semibold">
            Step into the Soul of India's Rich Culture
          </h2>
          <button
            onClick={handleScrollRight}
            className="text-blue-600 hover:text-blue-800 transition font-medium"
          >
            View More →
          </button>
        </div>

        {/* Cards Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-8 scrollbar-hide h-full"
        >
          {/* Card 1 */}
          <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-full object-cover transition-transform duration-300"
              src="/home-img/Golden-Temple.jpeg"
              alt="Golden temple "
            />
            <div className="absolute grid content-end  inset-0 p-6 opacity-0 justify-items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-xl text-white  font-semibold">
                  Golden Temple
                </h3>

                <a
                  href="/"
                  className="text-white  px-6  p-2 ml-4 bg-red-600 hover:text-gray-200 mt-4 inline-block rounded-2xl"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105  ">
            <img
              className="w-full h-full object-cover transition-transform duration-300"
              src="/home-img/charminar.jpeg"
              alt="Charminar"
            />
            <div className="absolute grid content-end  inset-0 p-6 opacity-0 justify-items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-xl text-white pl-4  font-semibold">
                  Charminar
                </h3>

                <a
                  href="/"
                  className="text-white  px-6  p-2 ml-4 bg-red-600 hover:text-gray-200 mt-4 inline-block rounded-2xl"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-full object-cover transition-transform duration-300"
              src="/home-img/Hawa-Mahal.jpeg"
              alt="Hawa Mahal"
            />
            <div className="absolute grid content-end  inset-0 p-6 opacity-0 justify-items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-xl text-white  font-semibold">
                  Hawa Mahal
                </h3>

                <a
                  href="/"
                  className="text-white  px-6  p-2 ml-4 bg-red-600 hover:text-gray-200 mt-4 inline-block rounded-2xl"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>

          {/* Add More Cards Here */}
          <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-full object-cover transition-transform duration-300"
              src="/home-img/red-fort.jpeg"
              alt="Red Fort"
            />
            <div className="absolute grid content-end  inset-0 p-6 opacity-0 justify-items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-xl text-white pl-5 font-semibold">
                  Red Fort
                </h3>

                <a
                  href="/"
                  className="text-white  px-6  p-2 ml-4 bg-red-600 hover:text-gray-200 mt-4 inline-block rounded-2xl"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="relative min-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <img
              className="w-full h-full object-cover transition-transform duration-300"
              src="/home-img/Rohtang-Pass.jpeg"
              alt="Lake House"
            />
            <div className="absolute grid content-end  inset-0 p-6 opacity-0 justify-items-center hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div>
                <h3 className="text-xl text-white  font-semibold">
                  Rohtang Pass
                </h3>

                <a
                  href="/"
                  className="text-white  px-6  p-2 ml-4 bg-red-600 hover:text-gray-200 mt-4 inline-block rounded-2xl"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
