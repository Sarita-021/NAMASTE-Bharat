import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-content">
                <h3>NAMASTE Bharat</h3>
                <p>Discover a World of Stories</p>
                <p className="copyright"> Copyright ⓒ {year}</p>
            </div>
        </footer>
    );
}

export default Footer;