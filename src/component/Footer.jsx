import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <h2 className="footer-heading">WEATHERAPP</h2>
        <div className="footer-pages">
          <ul>
            <li>Home</li>
            <li>Cities</li>
            <li>News</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
