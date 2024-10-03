import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate, json } from "react-router-dom";

// Define the possible user roles
const userRoles = {
    Tourist: [
        { name: "My Details", path: "/traveller/details" },
        { name: "Destinations", path: "/traveller/destinations" },
        { name: "Purchase History", path: "/traveller/purchase-history" },
        { name: "My Learnings", path: "/traveller/learnings" },
        { name: "Notifications", path: "/traveller/notifications" },
    ],
    Tutor: [
        { name: "Add Item", path: "/craftsman/add-item" },
        { name: "My Details", path: "/craftsman/details" },
        { name: "Recent Orders", path: "/craftsman/recent-orders" },
        { name: "Notifications", path: "/craftsman/notifications" },
        { name: "Orders Fulfilled", path: "/craftsman/orders-fulfilled" },
    ],
    Artisan: [
        { name: "Destinations", path: "/educator/destinations" },
        { name: "Teach & Track", path: "/educator/teach-track" },
        { name: "Purchase History", path: "/educator/purchase-history" },
    ],
    Admin: [
        { name: "Add Event", path: "/admin/add-event" },
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Notifications", path: "/admin/notifications" },
        { name: "Local Communities", path: "/admin/local-communities" },
    ],
};

const LeftPanel = () => {
    const [role, setRole] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setRole(user.role);
        }
    }, []);

    const menuitems = userRoles[role];

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
