import React, { useState } from "react";

const CalendarHeader = () => {
  const [activeTab, setActiveTab] = useState("festivals"); // to switch between Festivals and Events
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false); // to toggle the month dropdown
  const [selectedMonths, setSelectedMonths] = useState([]); // to track selected months
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false); // to toggle the states dropdown
  const [selectedStates, setSelectedStates] = useState([]); // to track selected states and UTs

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to handle checkbox selection
  const handleMonthChange = (month) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }
  };

  const statesAndUTs = {
    East: [
      "Andaman and Nicobar Islands",
      "Bihar",
      "Jharkhand",
      "Odisha",
      "West Bengal",
    ],
    West: [
      "Dadra and Nagar Haveli and Daman and Diu",
      "Goa",
      "Gujarat",
      "Maharashtra",
    ],
    Central: ["Chhattisgarh", "Madhya Pradesh"],
    NorthEast: [
      "Arunachal Pradesh",
      "Assam",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Sikkim",
      "Tripura",
    ],
    North: [
      "Chandigarh",
      "Delhi",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Ladakh",
      "Punjab",
      "Rajasthan",
      "Uttar Pradesh",
    ],
    South: [
      "Andhra Pradesh",
      "Karnataka",
      "Kerala",
      "Lakshadweep",
      "Puducherry",
      "Tamil Nadu",
      "Telangana",
    ],
  };
  const handleStateChange = (state) => {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter((s) => s !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  };

  // Function to clear all selected months
  const clearSelection = () => {
    setSelectedMonths([]);
    setSelectedStates([]);
  };

  // Dummy cards data for festivals and events with associated months
  const festivalCards = [
    {
      title: "Dussehra",
      date: "12-10 Oct",
      description: "Victory of Good over Evil",
      month: "October",
      state: "Uttar Pradesh",
      image: "/home-img/dusserha.jpeg",
    },
    {
      title: "Karwa Chauth",
      date: "20-10 Oct",
      description: "A Celebration of love and matrimony",
      month: "October",
      state: "Uttar Pradesh",
      image: "/home-img/Karva-Chauth.jpeg",
    },
    {
      title: "Diwali",
      date: "01-11 Nov",
      description: "Festival of Lights",
      month: "November",
      state: "Delhi",
      image: "/home-img/diwali1.jpeg",
    },
    {
      title: "Kut Festival",
      date: "01-11 Nov",
      description: "A joyous harvest festivail in the heart of Manipur",
      month: "November",
      state: "Manipur",
      image: "/home-img/kut-festival.jpeg",
    },
    {
      title: "Bhai Dooj",
      date: "03-11 Nov",
      description: "Celebration of sibling's love",
      month: "November",
      state: "Bihar",
      image: "/home-img/bhai-dooj.jpg",
    },
    {
      title: "Holi",
      date: "14-03 Mar",
      description: "Festival of Colors",
      month: "March",
      state: "Uttar Pradesh",
      image: "/home-img/holi.jpeg",
    },
  ];

  const eventCards = [
    {
      title: "Music Concert",
      description: "Live Performance",
      month: "August",
    },
    {
      title: "Art Exhibition",
      description: "Display of Modern Art",
      month: "April",
    },
    {
      title: "Tech Conference",
      description: "Latest in Technology",
      month: "June",
    },
  ];

  // Filter function for cards
  const filterCardsByMonthAndState = (cards) => {
    let filteredCards = cards;

    // Filter by month
    if (selectedMonths.length > 0) {
      filteredCards = filteredCards.filter((card) =>
        selectedMonths.includes(card.month)
      );
    }

    // Filter by state
    if (selectedStates.length > 0) {
      filteredCards = filteredCards.filter((card) =>
        selectedStates.includes(card.state)
      );
    }

    return filteredCards;
  };

  return (
    <div className="text-center py-8">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-red-600">Every day a</h1>
      <h2 className="text-6xl font-extrabold text-red-600">CELEBRATION</h2>

      {/* Buttons for Festivals and Events */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          className={`py-2 px-6 rounded-full font-semibold ${
            activeTab === "festivals"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("festivals")}
        >
          Festivals
        </button>
        <button
          className={`py-2 px-6 rounded-full font-semibold ${
            activeTab === "events"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActiveTab("events")}
        >
          Events
        </button>
      </div>

      {/* Filters Section */}
      <div className="mt-4 flex justify-center   space-x-4">
        <div className="relative inline-block text-left">
          <button
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            By Month
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isMonthDropdownOpen && (
            <div className="absolute mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="p-4 grid grid-cols-3 gap-2">
                {months.map((month, index) => (
                  <label key={index} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-red-500"
                      value={month}
                      checked={selectedMonths.includes(month)}
                      onChange={() => handleMonthChange(month)}
                    />
                    <span className="ml-2 text-sm text-gray-700">{month}</span>
                  </label>
                ))}
              </div>
              {/* Apply and Clear buttons */}
              <div className="flex justify-between p-4">
                <button
                  onClick={() => {
                    setIsMonthDropdownOpen(false);
                  }}
                  className="bg-red-500 text-white py-2 px-4 rounded-full"
                >
                  Apply
                </button>
                <button
                  className="bg-transparent text-red-500 border border-red-500 py-2 px-4 rounded-full"
                  onClick={clearSelection}
                >
                  Clear
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Other Filters */}
        {/* States and UTs Filter */}
        <div className="relative inline-block text-left">
          <button
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
            onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
          >
            By States & UTs
          </button>
          {isStateDropdownOpen && (
            <div className="absolute mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="p-4 grid grid-cols-3 gap-2">
                {Object.keys(statesAndUTs).map((region) => (
                  <div key={region}>
                    <h3 className="font-bold text-red-600">{region}</h3>
                    {statesAndUTs[region].map((state) => (
                      <label key={state} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-red-500"
                          value={state}
                          checked={selectedStates.includes(state)}
                          onChange={() => handleStateChange(state)}
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {state}
                        </span>
                      </label>
                    ))}
                  </div>
                ))}
                {/* Apply and Clear buttons */}
                <div className="flex justify-between p-4">
                  <button
                    onClick={() => {
                      setIsStateDropdownOpen(false);
                    }}
                    className="bg-red-500 text-white py-2 px-4 rounded-full"
                  >
                    Apply
                  </button>
                  <button
                    className="bg-transparent text-red-500 border border-red-500 py-2 px-4 ml-10 rounded-full"
                    onClick={clearSelection}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative inline-block text-left">
          <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700">
            By Interests
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {activeTab === "festivals" &&
          filterCardsByMonthAndState(festivalCards).map((card, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center shadow-lg rounded-lg p-6 h-96"
              style={{
                backgroundImage: `url(${card.image})`,
                // Replace with actual path
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full text-center text-white">
                <div className="bg-red-500 py-1 px-3 text-xs rounded-full font-bold absolute top-4 left-4">
                  {card.date}
                </div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-lg font-light mt-2">{card.description}</p>
              </div>
            </div>
          ))}

        {activeTab === "events" &&
          filterCardsByMonthAndState(eventCards).map((card, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center shadow-lg rounded-lg p-6 h-96"
              style={{
                backgroundImage: `url('/path-to-your-image/event-background.jpg')`, // Replace with actual path
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full text-center text-white">
                <div className="bg-red-500 py-1 px-3 text-xs rounded-full font-bold absolute top-4 left-4">
                  {`01-09 Oct`}
                </div>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
                <p className="text-lg font-light mt-2">{card.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CalendarHeader;
