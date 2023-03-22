import React, { useEffect } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const onScroll = (event) => {
      const scrollPosition = event.target.scrollingElement.scrollTop;
      nav.classList.toggle("scrolled-down", scrollPosition > 66);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
  }, []);
  return (
    <>
      <nav id="nav" className="navbar">
        <ul>
          <li>Home</li>
          <li>Cities</li>
          <li>News</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
