import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from '@gsap/react';

// Assets (videos, images)
const bgVideo3 = "/videos/bg-video3.mp4";
const img3 = "/images/img3.jpeg";
const img4 = "/images/img4.jpg";

function About() {

  

  return (
    <div className="min-w-full h-auto bg-gradient-to-b from-red-800 via-purple-700 to-blue-900 overflow-x-hidden">
    <div className="relative flex items-center justify-start h-screen overflow-hidden">
      <video
        src={bgVideo3}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-auto min-w-full min-h-[50%] xl:min-h-full max-w-none brightness-[0.8] contrast-[1.2]"
      ></video>

      {/* Header Section */}
      <h1 className="relative z-10 text-white text-center px-10 md:px-12 xl:px-24 font-extrabold lg:text-2xl xl:text-4xl drop-shadow-2xl leading-relaxed tracking-wide py-44 lg:py-0">
        <FontAwesomeIcon
          className="text-yellow-400 ml-2 align-middle py-2"
          icon={faHandshake}
        />{" "}
        <span className="text-yellow-400">NAMASTE-Bharat</span>,
        <br />
        a digital platform that showcases India's rich cultural heritage and
        traditions.
        <br />
        We blend <span className="text-yellow-400">modern technology</span>{" "}
        with timeless culture,
        <br />
        making it accessible and engaging for everyone.
      </h1>
      </div>
    

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-gradient-to-r from-blue-500 to-green-500 p-8 shadow-2xl transition duration-300 transform hover:scale-105">
      
      {/* Left Image Section */}
      <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
        <img className="rounded-2xl transform transition duration-300 hover:scale-105 hover:brightness-110" src={img3       } alt="bg image" />
      </div>
      
      {/* Right Text Section */}
      <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
        <h1 className="text-4xl font-extrabold py-4 text-yellow-400">Our Vision</h1>
        <p className="px-3 italic text-gray-200 text-lg leading-relaxed">
          At NAMASTE-Bharat, we aim to nurture a modern approach to strengthen the traditional essence of Bharat (India) by leveraging innovative technologies to promote cultural awareness, sustainable tourism, and education.
        </p>
        <p className="px-3 mt-4 text-gray-300">
          Our platform bridges the gap between the digital world and India's rich cultural heritage, offering interactive features and personalized experiences.
        </p>
        </div>
        </div>
      

      {/* offer section  */}
      <div className="my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-gradient-to-r from-yellow-400 to-pink-500 p-8 shadow-2xl transition duration-300 transform hover:scale-105">
      <div className="w-full bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center text-white">
        <h1 className="text-4xl font-extrabold py-6 text-yellow-400 animate-pulse">What We Offer</h1>
        <div className="flex lg:flex-wrap flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-500 hover:text-white">
            <h1 className="text-2xl font-bold">Interactive Cultural Map</h1>
            <p>Explore India's diverse regions through our interactive cultural map, highlighting key heritage sites, cultural festivals, and unique traditions.</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-500 hover:text-white">
            <h1 className="text-2xl font-bold">Virtual Tours</h1>
            <p>Experience India like never before with 360-degree virtual tours of monuments, festivals, and archaeological sites.</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-red-500 hover:text-white">
            <h1 className="text-2xl font-bold break-words hidden md:block">Personalized Recommendations</h1>
            <h1 className="text-2xl font-bold break-words block md:hidden">Personalized Recom..</h1>

            <p>Get customized suggestions for hotels, restaurants, guides, and attractions based on your preferences.</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-yellow-500 hover:text-white">
            <h1 className="text-2xl font-bold">Cultural Events & Workshops</h1>
            <p>Participate in live cultural events and workshops, enhancing your understanding of India's vibrant traditions.</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-purple-500 hover:text-white">
            <h1 className="text-2xl font-bold">Educational Resources</h1>
            <p>Educators can access lesson plans, cultural resources, and tools for student engagement, making learning more immersive.</p>
          </div>
          <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-teal-500 hover:text-white">
            <h1 className="text-2xl font-bold">Artisan Marketplace</h1>
            <p>Support local artisans through our e-commerce platform, where you can purchase traditional art, crafts, and textiles from across the country.</p>
          </div>
        </div>
      </div>
    </div>



    {/* Our mission Content Section */}
    <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-gradient-to-r from-purple-500 to-pink-500 p-8 shadow-2xl transition duration-300 transform hover:scale-105">
      
      {/* right Image Section */}
      <div className="w-full lg:min-h-full object-cover lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
        <img className="rounded-2xl transform transition duration-300 hover:scale-105 hover:brightness-110" src={img4} alt="bg image" />
      </div>
      




      {/* left Text Section */}
      <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
        <h1 className="text-4xl font-extrabold py-4 text-yellow-400">Our Mission</h1>
        <p className="px-3 italic text-gray-200 text-lg leading-relaxed">
          Our mission is to digitally preserve India's cultural heritage while promoting sustainable tourism that benefits local communities. Through our platform, we aim to educate, engage, and inspire users by providing a comprehensive and interactive journey through India’s diverse cultural landscape.
        </p>
        <p className="px-3 mt-4 text-gray-300">
          Join us in celebrating the spirit of India – NAMASTE-Bharat: where tradition meets innovation!
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;

