import React from "react";
import LeftPanel from "../components/leftpanel";
import axios from "axios";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const My_Detail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullname: "Abc",
    // profilePhoto: '',
    address: "",
    email: "",
    phone: "",
    // interests: [],
  });
  const [userr, setUserrData] = useState({
    About: "This is a about section",
    // interests: [],
  });

  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  const user = JSON.parse(localStorage.getItem("user"));
  // const user = localStorage.getItem('user');
  console.log(user._id);
  // Fetch user data from the backend API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/v1/user/getuser", {
          headers: {
            userid: user._id,
          },
        });

        const data = await response.data.user;
        console.log(data);

        // window.localStorage.setItem('user', JSON.stringify(data.user));
        // window.localStorage.setItem('token', JSON.stringify(data.user));
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER_URI}/user/${userData?.username}`,
        {
          fullname: userData.fullname,
          address: userData.address,
          email: userData.email,
          phone: userData.phone,
        }
      );
      if (res.status === 201) {
        window.location.reload();
      }
    } catch (err) {
      setError("Error occurred !!");
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center bg-slate-100">
        <div>
          <LeftPanel />
        </div>
        <div className="w-full h-screen p-4 bg-white shadow-xl rounded-lg">
          <button
            onClick={toggleEditing}
            className="absolute right-4 text-gray-500 hover:text-gray-700"
          >
            <PencilIcon className="w-5 h-5" />
          </button>
          {/* Profile Picture */}
          <div className="flex justify-start gap-4 items-center mb-6">
            <div>
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                Change picture
              </button>
              <button className="bg-red-500 text-white px-3 py-2 rounded-md">
                Delete picture
              </button>
            </div>
          </div>

          {/* Profile Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="fullname"
                value={userData.fullname}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full max-h-[8vh]"
              />
            ) : (
              <p className="border border-gray-300 rounded-md p-2 w-full max-h-[8vh]">
                {userData.username}
              </p>
            )}
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <p className="border border-gray-300 rounded-md p-2 ">
              @{userData.username}
            </p>
          </div>
          {/* email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            {isEditing ? (
              <input
                type="text"
                name="status"
                value={userData.status}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <p className="border border-gray-300 rounded-md p-2">
                {userData.email}
              </p>
            )}
          </div>

          {/* Status Recently */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role
            </label>
            {isEditing ? (
              <input
                type="text"
                name="status"
                value={userData.status}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <p className="border border-gray-300 rounded-md p-2">
                {userData.role}
              </p>
            )}
          </div>

          {/* About Me */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              About me
            </label>
            {isEditing ? (
              <textarea
                name="about"
                value={userData.about}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md h-[8vh] p-2 w-full"
              />
            ) : (
              <p className="border border-gray-300 rounded-md p-2">
                {userr.About}
              </p>
            )}
          </div>

          {/* Save Changes Button */}
          {isEditing && (
            <button
              onClick={handleUpdate}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Save changes
            </button>
          )}
          <div className="flex items-center justify-between mt-4 bg-red-200 rounded-lg ">
            <div className=" text-red-600">
              Danzer Zone ! , your one tap will delete you whole info
            </div>
            <div>
              <button className="bg-red-500 text-white px-3 py-2 rounded-md m-3">
                Delete Your Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Detail;
