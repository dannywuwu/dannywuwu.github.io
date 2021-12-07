import React from "react";
import "../res/styles/Navbox.scss";
import { Contact } from "./Contact";

interface NavboxProps {}

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    <div className="nav-wrapper">
      <ul className="nav-box">
        <a href="#stats">
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
