import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "../css/app.css";
import Header from "./header";
import Home from "../pages/home";
// import Login from "../pages/login";
// import Register from "../pages/register";
import Footer from "./footer";


function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route exact path="/about" element={<About />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} /> */}
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;



