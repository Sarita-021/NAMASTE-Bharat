import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate, json } from "react-router-dom";

// Define the possible user roles
const userRoles = {
    Tourist: [
        { name: "My Details", path: "/profile" },
        { name: "My Destinations", path: "/destinations" },
        { name: "Purchase History", path: "/traveller/purchase-history" },
        { name: "My Learnings", path: "/learnings" },
        { name: "Notifications", path: "/notifications" },
    ],
    Artisan: [
        { name: "My Details", path: "/profile" },
        { name: "My Destinations", path: "/destinations" },
        { name: "Product Listing", path: "/educator/product-listing" },
        { name: "Product Catalog", path: "/educator/product-catalog" },
        { name: "Order Processing", path: "/educator/order-processing" },
        { name: "Seller Dashboard", path: "/educator/seller-dashboard" },
        { name: "Analysis & Report", path: "/educator/analysis-report" },
        { name: "Notification", path: "/notification" },
    ],
    Admin: [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "User Management", path: "/admin/user-management" },
        { name: "Content Management", path: "/admin/content-management" },
        { name: "Analysis", path: "/admin/analysis" },
        { name: "Notifications", path: "/notifications" },
    ],
};

const LeftPanel = () => {
    const [userData, setUserData] = useState("");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (user) {
            setRole(user.role);
            setUserData(user.username);
            setIsLoading(false);
        }
    }, []);

    const [role, setRole] = useState(null);
    const menuitems = userRoles[role];
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        console.log("Iam loading");
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="w-[300px] h-screen bg-off-white text-center bg-slate-100 text-dark-gray p-4">
                <div className="mb-5 h-[8vh] items-center justify-center flex gap-2 w-full text-xl bg-slate-200 rounded-lg">
                    <div className="">
                        <NavLink
                            className="text-gray-900 px-2 py-1 rounded m-1 cursor-pointer"
                            to="/profile"
                        >
                            <img
                                className="min-w-10 h-10 rounded-full"
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="profile"
                            />
                        </NavLink>
                    </div>
                    <div className="font-medium">Welcome, {userData}</div>
                    <div className="">
                        <NavLink
                            className="text-gray-900 px-2 py-1 rounded m-1 cursor-pointer"
                            to="/profile"
                        >
                            <img
                                className="min-w-6 h-6 rounded-full"
                                src="/images/wave.svg"
                                alt="profile"
                            />
                        </NavLink>
                    </div>
                </div>
                <ul className="font-[Aptos] text-[24px]">
                    {menuitems.map((item, index) => (
                        <li key={index} className="mb-4">
                            <div className="hover:bg-slate-200 h-[6vh] rounded-lg">
                                <NavLink className="" to={item.path}>
                                    {item.name}
                                </NavLink>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default LeftPanel;
