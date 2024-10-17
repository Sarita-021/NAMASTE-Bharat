import React, { useState, useEffect, useRef } from "react";
import LeftPanel from "../components/leftpanel";
import axios from "axios";
import { PencilIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const fileTypes = ["JPG", "PNG", "GIF"];

const My_Detail = () => {
  // State management
  const [isEditing, setIsEditing] = useState(false); // Controls edit mode
  const [image, setImage] = useState(""); // Stores profile image URL
  const [chng, setChng] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    address: "",
    phone: "",
    about: "",
  });

  const inputFile = useRef(null); // Ref to access the file input
  const [selectedFile, setFile] = useState(null); // Holds the selected profile photo file

  // Loading states and error management
  const [loading, setLoading] = useState(true); // For loading state when fetching data
  const [error, setError] = useState(null); // Error handling
  const [isUploading, setIsUploading] = useState(false); // Tracks upload progress
  const [isSaving, setIsSaving] = useState(false); // Tracks save button state

  // Retrieve user data from localStorage
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch user's profile image from backend when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user profile image as a blob
        const response = await axios.get("/api/v1/user/profilePicture", {
          headers: {
            email: user.email,
          },
          responseType: "blob", // Ensures we receive image data in binary format
        });

        // Ensure the response is an image (binary data)
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.startsWith("image")) {
          throw new Error("Invalid content type: not an image");
        }

        const url = URL.createObjectURL(response.data); // Convert Blob to URL
        console.log(url);
        setImage(url);
      } catch (error) {
        console.error("Error fetching profile image:", error);
        // Use default image if fetch fails
        setImage("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
      } finally {
        setLoading(false); // Mark loading as complete
      }
    };

    fetchUserData();
  }, [user.email]); // Dependency ensures the effect runs when user.email changes

  // chnage

  const handleChange = () => {
    setChng(true);
  };
  // Handles form input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value }); // Update the respective field in userData state
  };

  // Handles the selection of profile image from file input
  const handleImageChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file to selectedFile state
  };

  // Submits the updated profile photo to the server
  const profilePhotoUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear previous errors
    setIsUploading(true); // Start upload process
    setChng(false);

    const formData = new FormData(); // Create form data object
    formData.append("avatar", selectedFile); // Append the selected file

    try {
      // Send PUT request to update profile picture
      const res = await axios.put("/api/v1/user/profilePhoto", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file upload
          email: user.email,
        },
      });

      // Update localStorage with the updated user data
      window.localStorage.setItem("user", JSON.stringify(res.data.updatedUser));

      // Reload the page to reflect the changes
      window.location.reload();
    } catch (error) {
      setError("Error updating profile picture.");
      console.log(error); // Log any error
    } finally {
      setIsUploading(false); // Mark upload process as complete
    }
  };

  // Submits the updated user details to the server
  const handleUpdate = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(""); // Clear any previous errors
    setIsSaving(true); // Mark as saving

    try {
      // Send PUT request to update user details
      const res = await axios.put(
        "/api/v1/user/updateuser",
        {
          username: userData.username,
          address: userData.address,
          phone: userData.phone,
          about: userData.about,
        },
        {
          headers: {
            email: user.email,
          },
        }
      );

      // Update localStorage with the updated user data
      window.localStorage.setItem("user", JSON.stringify(res.data.data));
      setIsEditing(false); // Exit edit mode
    } catch (err) {
      setError("Error updating user details.");
      console.log(err); // Log any error
    } finally {
      setIsSaving(false); // Mark saving process as complete
    }
  };

  // delete user
  const deleteUser = async (e) => {
    try {
      const response = await axios.delete("/api/v1/user/delete", {
        headers: {
          userid: user.userid,
        },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.clear();
        navigate("/");
        // You can handle additional UI actions, like updating the UI or redirecting the user
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error deleting the user");
    }
  };

  // Toggles the edit mode for user details
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // Show loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error message if any error occurs
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center bg-slate-100">
        {/* Sidebar */}
        <LeftPanel />

        {/* Main Content */}
        <div className="w-full h-screen p-4 ml-1 bg-white shadow-xl rounded-lg">
          {/* Edit Mode Toggle Button */}
          {!isEditing && (
            <button
              onClick={toggleEditing}
              className="absolute right-4 text-gray-500 hover:text-gray-700"
            >
              <PencilIcon className="w-5 h-5" />
            </button>
          )}

          {/* Profile Picture Display */}
          <div className="flex justify-start gap-4 items-center mb-6">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={image} // Display profile image or default if not available
              alt="Profile"
            />
            {/* Profile Photo Upload Form */}
            {chng ? (
              <form
                id="uploadform"
                onSubmit={profilePhotoUpdate}
                encType="multipart/form-data"
              >
                <input type="file" name="avatar" onChange={handleImageChange} />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                  disabled={!selectedFile || isUploading} // Disable button during upload
                >
                  {isUploading ? "Uploading..." : "Upload"}{" "}
                  {/* Show uploading status */}
                </button>
              </form>
            ) : (
              <div id="update" className=" mb-4">
                <button
                  onClick={handleChange}
                  className="bg-blue-500 text-white mr-4 px-3 py-2 rounded-md"
                >
                  Change picture
                </button>
                <button className="bg-red-500 text-white px-3 py-2 rounded-md">
                  Delete picture
                </button>
              </div>
            )}
          </div>

          {/* User Details */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile Name
            </label>
            {isEditing ? (
              // Input for editing username
              <input
                type="text"
                name="username"
                value={userData.username || user.username} // Pre-fill with user data
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              // Display username when not in edit mode
              <p className="border border-gray-300 rounded-md p-2 w-full">
                {user.username}
              </p>
            )}
          </div>

          {/* Display Email (Non-Editable) */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <p className="border border-gray-300 rounded-md p-2">
              {user.email}
            </p>
          </div>

          {/* Display User Role */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role
            </label>
            <p className="border border-gray-300 rounded-md p-2">{user.role}</p>
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            {isEditing ? (
              // Input for editing phone number
              <input
                type="text"
                name="phone"
                value={userData.phone || user.phone} // Pre-fill with user data
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              // Display phone number when not in edit mode
              <p className="border border-gray-300 rounded-md p-2 w-full">
                {user.phone}
              </p>
            )}
          </div>

          {/* About Me Section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              About Me
            </label>
            {isEditing ? (
              // Textarea for editing 'About Me'
              <textarea
                name="about"
                value={userData.about || user.about} // Pre-fill with user data
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md h-[8vh] p-2 w-full"
              />
            ) : (
              // Display 'About Me' when not in edit mode
              <p className="border border-gray-300 rounded-md p-2">
                {user.about}
              </p>
            )}
          </div>

          {/* Save Changes Button */}
          {isEditing && (
            <button
              onClick={handleUpdate}
              className="w-full bg-blue-500 text-white py-2 rounded-md"
              disabled={isSaving} // Disable button during saving process
            >
              {isSaving ? "Saving..." : "Save changes"}{" "}
              {/* Show saving status */}
            </button>
          )}

          {/* Danger Zone - Delete Account */}
          <div className="flex items-center justify-between mt-4 bg-red-200 rounded-lg">
            <div className="text-red-600">
              Danger Zone! Deleting your account will remove all your data.
            </div>
            <button
              onClick={deleteUser}
              className="bg-red-500 text-white px-3 py-2 rounded-md m-3"
            >
              Delete Your Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default My_Detail;
