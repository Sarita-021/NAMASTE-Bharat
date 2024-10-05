import React from "react";
import LeftPanel from "../components/leftpanel";
import axios from "axios";
import { PencilIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from "react";

const My_Detail = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        fullname: '',
        // profilePhoto: '',
        address: '',
        email: '',
        phone: ''
        // interests: [],
    });

    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // For error handling

    const user = JSON.parse(localStorage.getItem('user'));
    // const user = localStorage.getItem('user');
    console.log(user._id)
    // Fetch user data from the backend API
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/v1/user/getuser', {
                    headers: {
                        'userid': user._id,
                    },
                })

                const data = await response.data.user;
                console.log(data)

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
                    phone: userData.phone
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
            <div className="grid grid-cols-2 gap-4" >
                <div className="">
                    <LeftPanel /></div>
                <div className="p-4 mt -8">
                    <div className=" bg-white shadow-md rounded-lg ">
                        <div className="relative">
                            {/* <img
                        className="w-24 h-24 rounded-full mx-auto"
                        src={userData.profilePhoto}
                        alt="Profile"
                    /> */}
                            <button
                                onClick={toggleEditing}
                                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
                            >
                                <PencilIcon className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <h2 className="text-xl font-semibold">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="username"
                                        value={userData.fullname}
                                        onChange={handleInputChange}
                                        className="border rounded p-1"
                                    />
                                ) : (
                                    userData.fullname
                                )}
                            </h2>
                            <p className="text-gray-600">
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="address"
                                        value={userData.address}
                                        onChange={handleInputChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                ) : (
                                    userData.address
                                )}
                            </p>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold">Email:</p>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    className="border rounded p-1 w-full"
                                />
                            ) : (
                                <p>{userData.email}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold">Phone:</p>
                            {isEditing ? (
                                <input
                                    type="tel"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                    className="border rounded p-1 w-full"
                                />
                            ) : (
                                <p>{userData.phone}</p>
                            )}
                        </div>
                        {/* <div className="mt-4">
                    <p className="font-semibold">Interests:</p>
                    {isEditing ? (
                        <textarea
                            name="interests"
                            value={userData.interests.join(', ')}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    interests: e.target.value.split(', '),
                                })
                            }
                            className="border rounded p-1 w-full"
                        />
                    ) : (
                        <p>{userData.interests.join(', ')}</p>
                    )}
                </div> */}
                        {isEditing && (
                            <button
                                onClick={toggleEditing}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default My_Detail;