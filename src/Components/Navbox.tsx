import React from "react";
import "../res/styles/Navbox.scss";

interface NavboxProps {}

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    // resume, email, github, linkedin
    <div className="nav-wrapper">
      <ul className="nav-box">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
