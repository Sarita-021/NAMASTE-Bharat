import react, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LeftPanel from "../../components/leftpanel";

const My_Details = () => {
    return (
        <header>
            <LeftPanel userRole="traveller" />
        </header>
    );
}

export default My_Details;