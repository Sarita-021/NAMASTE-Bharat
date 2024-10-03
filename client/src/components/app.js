import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "../css/app.css";
import Header from "./header";
import Home from "../pages/home";
import Footer from "./footer";
import Register from "../pages/Sign_in/register";
import Login from "../pages/Sign_in/login";
import My_Details from "../pages/Traveller/mydetails";
import My_Destination from "../pages/Traveller/mydestination";
import My_Learnings from "../pages/Traveller/mylearnings";
import Notification from "../pages/Traveller/notification";
import Purchase_History from "../pages/Traveller/purchasehistory";
import About from "../pages/about"
import DashboardNav from "./DashboardNav";


function App() {
    return (
        <div className="App">
            <Router>
                {/* <Header /> */}
                <DashboardNav/>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/about" element={<About />} />

                    {/* Traveller Routes */}
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydestinations" element={<My_Destination />} />
                    <Route exact path="/mydetails" element={<My_Learnings />} />
                    <Route exact path="/mydetails" element={<Purchase_History />} />
                    <Route exact path="/mydetails" element={<Notification />} />

                    {/* Tutor Routes */}
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />

                    {/* Admin Routes */}
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />

                    {/* Artisan Routes */}
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                    <Route exact path="/mydetails" element={<My_Details />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
