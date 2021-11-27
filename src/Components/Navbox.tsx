import React from "react";
import "../res/styles/Navbox.scss";

interface NavboxProps {}

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    // resume, email, github, linkedin
    <div className="nav-wrapper">
      <ul className="nav-box">
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#news">
          <li>News</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};
