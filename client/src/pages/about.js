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
  const teamMembers = [
    {
      name: "Ankit Singh",
      role: "Frontend Developer",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png", // Replace with actual photo paths
    },
    {
      name: "Suniti",
      role: "Backend Developer",
      photo:
        "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    },
    {
      name: "Sarita",
      role: "AI Expert",
      photo:
        "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
    },
    {
      name: "Ajeet",
      role: "Project Manager",
      photo:
        "https://static.vecteezy.com/system/resources/thumbnails/026/497/734/small_2x/businessman-on-isolated-png.png",
    },
  ];

  return (
    <div className="min-w-full h-auto bg-white overflow-x-hidden">
      <div className="h-[5vw] flex justify-center items-center my-3">
        <p className="text-[calc(4vw)] underline text-slate-700 text-center font-extrabold] animate-bounce">
          INTRODUCTION
        </p>
      </div>
      <div className="w-[calc(90vw)] flex flex-col md:flex-row gap-6 p-6 m-auto mt-10 bg-white shadow-xl rounded-lg overflow-hidden ">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-1/4 max-h-screen md:w-3/4">
            <img
              className=" object-contain rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
              src="/images/NAMASTE_BHARAT.png"
              alt="Namaste Bharat Logo"
            />
          </div>
        </div>
        <div className="flex-1 text-gray-700 ">
          <p className="text-lg leading-relaxed font-light">
            India is a land of incredible diversity, with every corner offering
            unique stories, traditions, and destinations. However, many of these
            gems remain overshadowed or underappreciated due to a lack of
            visibility in mainstream tourism. Addressing this challenge,{" "}
            <span className="font-semibold text-indigo-600">
              Namaste Bharat
            </span>{" "}
            emerges as a transformative platform designed to enhance the
            popularity of Indian destinations and bolster tourism. By leveraging
            cutting-edge technology, our application curates authentic,
            culturally rich content and offers interactive tools to connect
            travelers with hidden treasures, promoting local economies and
            preserving heritage.
          </p>
          <p className="mt-8 text-lg leading-relaxed font-light">
            The name{" "}
            <span className="font-semibold text-indigo-600">
              Namaste Bharat
            </span>{" "}
            signifies a warm and heartfelt welcome to the vibrant spirit of
            India, as "Namaste" reflects the traditional Indian gesture of
            greeting, and "Bharat" represents the nation's soulful identity. Our
            aim is to bridge the gap between travelers and destinations by
            providing an immersive experience that goes beyond conventional
            tourism. With an emphasis on accessibility, sustainability, and
            cultural enrichment, Namaste Bharat aspires to ignite a renewed
            appreciation for India's unparalleled beauty and diversity.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-white p-8 shadow-2xl transition duration-300 transform ">
        {/* Left Image Section */}
        <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
          <img
            className="rounded-2xl transform transition duration-300 hover:scale-105 hover:brightness-110"
            src={img3}
            alt="bg image"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
          <h1 className="text-4xl font-extrabold py-4 text-white">
            Our Vision
          </h1>
          <p className="px-3 italic text-gray-200 text-lg leading-relaxed">
            At NAMASTE-Bharat, we aim to nurture a modern approach to strengthen
            the traditional essence of Bharat (India) by leveraging innovative
            technologies to promote cultural awareness, sustainable tourism, and
            education.
          </p>
          <p className="px-3 mt-4 text-gray-300">
            Our platform bridges the gap between the digital world and India's
            rich cultural heritage, offering interactive features and
            personalized experiences.
          </p>
        </div>
      </div>

      {/* story section */}
      <div className="flex flex-col lg:flex-row items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-white p-8 shadow-2xl transition duration-300 transform ">
        {/* left Text Section */}
        <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
          <h1 className="text-4xl font-extrabold py-4 text-white">Our Story</h1>
          <p className="px-3 italic text-gray-200 leading-relaxed">
            In September, our team embarked on an inspiring journey by
            participating in an inter-university hackathon, the gateway to Smart
            India Hackathon 2024. This event ignited a spark to solve one of the
            most profound challenges of our time — enhancing the travel and
            tourism landscape of India while celebrating its rich heritage and
            culture. Among a myriad of problem statements, we chose one deeply
            rooted in our love for the nation: promoting India's cultural wealth
            and hidden treasures to the world.
          </p>
          <p className="px-3 italic text-gray-200 leading-relaxed">
            Through intense brainstorming, late-night meetings, and passionate
            discussions, we envisioned a platform that seamlessly blends travel,
            tourism, education, and employment generation. Our mission was
            clear: to showcase India’s diverse destinations while creating
            opportunities for education and livelihoods in tourism. After
            countless iterations, Namaste Bharat was born — a project that
            empowers travelers and communities, combining tradition and
            innovation to celebrate the spirit of India on a global stage.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
          <img
            className="rounded-2xl w-full transform transition duration-300 hover:scale-105 hover:brightness-110"
            src="/images/our-story.jpg"
            alt="bg image"
          />
        </div>
      </div>

      {/* offer section  */}
      <div className="my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0  shadow-2xl transition duration-300 transform ">
        <div className="w-full bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center text-white">
          <h1 className="text-4xl font-extrabold py-6 text-yellow-50 animate-pulse">
            What We Offer
          </h1>
          <div className="flex lg:flex-wrap flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-blue-500 hover:text-white">
              <h1 className="text-2xl font-bold">Interactive Cultural Map</h1>
              <p>
                Explore India's diverse regions through our interactive cultural
                map, highlighting key heritage sites, cultural festivals, and
                unique traditions.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-500 hover:text-white">
              <h1 className="text-2xl font-bold">Virtual Tours</h1>
              <p>
                Experience India like never before with 360-degree virtual tours
                of monuments, festivals, and archaeological sites.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-red-500 hover:text-white">
              <h1 className="text-2xl font-bold break-words hidden md:block">
                Personalized Recommendations
              </h1>
              <h1 className="text-2xl font-bold break-words block md:hidden">
                Personalized Recom..
              </h1>

              <p>
                Get customized suggestions for hotels, restaurants, guides, and
                attractions based on your preferences.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-yellow-500 hover:text-white">
              <h1 className="text-2xl font-bold">
                Cultural Events & Workshops
              </h1>
              <p>
                Participate in live cultural events and workshops, enhancing
                your understanding of India's vibrant traditions.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-purple-500 hover:text-white">
              <h1 className="text-2xl font-bold">Educational Resources</h1>
              <p>
                Educators can access lesson plans, cultural resources, and tools
                for student engagement, making learning more immersive.
              </p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg transition duration-300 transform hover:scale-110 hover:bg-teal-500 hover:text-white">
              <h1 className="text-2xl font-bold">Artisan Marketplace</h1>
              <p>
                Support local artisans through our e-commerce platform, where
                you can purchase traditional art, crafts, and textiles from
                across the country.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our mission Content Section */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between my-12 rounded-md mx-5 lg:mx-20 space-y-8 lg:space-y-0 bg-white p-8 shadow-2xl transition duration-300 transform hover:scale-105">
        {/* right Image Section */}
        <div className="w-full lg:min-h-full object-cover lg:w-[40%] rounded-2xl overflow-hidden shadow-xl">
          <img
            className="rounded-2xl transform transition duration-300 hover:scale-105 hover:brightness-110"
            src={img4}
            alt="bg image"
          />
        </div>

        {/* left Text Section */}
        <div className="w-full lg:w-[50%] bg-gray-800 bg-opacity-90 p-6 rounded-xl shadow-xl text-center transition duration-300 transform hover:scale-105">
          <h1 className="text-4xl font-extrabold py-4 text-white">
            Our Mission
          </h1>
          <p className="px-3 italic text-gray-200 text-lg leading-relaxed">
            Our mission is to digitally preserve India's cultural heritage while
            promoting sustainable tourism that benefits local communities.
            Through our platform, we aim to educate, engage, and inspire users
            by providing a comprehensive and interactive journey through India’s
            diverse cultural landscape.
          </p>
          <p className="px-3 mt-4 text-gray-300">
            Join us in celebrating the spirit of India – NAMASTE-Bharat: where
            tradition meets innovation!
          </p>
        </div>
      </div>
      {/* meet my team */}
      <div className="w-full h-[calc(60vh)] p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white h-full shadow-md rounded-lg overflow-hidden flex flex-col items-center p-8"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
