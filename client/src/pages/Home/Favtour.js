import React, { useState } from "react";

const Favtour = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Vrindavan",
      description: `Vrindavan is a holy town in Uttar Pradesh, northern India. The Hindu deity Krishna 
                    is said to have spent his childhood here. It's home to temples, many dedicated to 
                    Krishna and his lover, the deity Radha. At BankeBihari Temple, the curtain in front 
                    of Krishna's statue is opened and closed every few minutes.`,
      imageUrl:
        "https://incrediblebharat.co.in/assets/frontend/new/images/meet-03.jpg", // Replace with actual image path
    },
    {
      title: "Agra",
      description: `Agra, located in Uttar Pradesh, is home to the iconic Taj Mahal, one of the Seven Wonders 
                    of the World. This beautiful white marble mausoleum was built by Emperor Shah Jahan 
                    in memory of his wife Mumtaz Mahal.`,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQI-r6Yn1V2QGBGZ8vVXeVFxSaggxl-oXmaJY4OY5CKvYSPxuOcSUCHj_JwH_mxHQ4HP9GWNXfZyF82QJ_SKop8llDMLZhdH4i8GkqBcQ", // Replace with actual image path
    },
    {
      title: "Jaipur",
      description: `Jaipur, the capital of Rajasthan, is known as the Pink City for its distinctive pink-hued 
                    buildings. It is famous for its historic forts, palaces, and vibrant markets.`,
      imageUrl: "/home-img/jaipur-hawa.jpeg", // Replace with actual image path
    },
    {
      title: "Delhi",
      description: `Delhi, the capital of India, is a vibrant blend of tradition and modernity. It is home 
                to historical landmarks like the Red Fort, Qutub Minar, and India Gate. The city's bustling 
                markets, street food, and cultural diversity make it a must-visit destination.`,
      imageUrl: "/home-img/Redelhi.jpg", // Replace with actual image path
    },
  ];

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center ">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-sm font-medium uppercase tracking-wider text-pink-500">
          How We Meet
        </h2>
        <h1 className="text-4xl font-semibold text-pink-600">
          Some Details For Your Tour Places
        </h1>
        <div className="mt-2 w-16 mx-auto border-t-2 border-gray-300"></div>
      </div>

      {/* Slider Content */}
      <div className="relative w-full max-w-6xl mx-auto h-[450px]">
        {/* Slide Image */}
        <img
          src={slides[currentSlide].imageUrl}
          alt={slides[currentSlide].title}
          className="w-3/5 h-full object-cover rounded-lg"
        />
        {/* Slide Content Box */}
        <div className="absolute right-5 top-1/4 bg-white p-6 shadow-2xl rounded-lg w-[500px] h-[200px]">
          <h3 className="text-2xl font-serif text-pink-600 mb-2">
            {slides[currentSlide].title}
          </h3>
          <p className="text-gray-600">{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* Bullet Navigation */}
      <div className="flex justify-center mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleBulletClick(index)}
            className={`w-4 h-4 mx-2 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Favtour;
