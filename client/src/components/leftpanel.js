import React, { useState, useEffect } from 'react';
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
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user)
        if (user) {
            setRole(user.role);
            setIsLoading(false)
        }
    }, []);

    const [role, setRole] = useState(null);
    const menuitems = userRoles[role];
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        console.log("Iam loading")
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="w-[200px] h-screen bg-off-white text-dark-gray p-4">
                <ul className="font-[Aptos] text-[24px]">
                    {menuitems.map((item, index) => (
                        <li key={index} className="mb-4">
                            <NavLink className="hover:underline" to={item.path}>{item.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </>
    );
};

export default LeftPanel;
