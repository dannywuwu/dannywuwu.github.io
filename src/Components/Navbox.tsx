import React from "react";

interface NavboxProps {}

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    // resume, email, github, linkedin
    <div className="nav-wrapper">
      <div className="nav-icon-row">
        <a href=""></a>
        <a href="mailto: d246wu@gmail.com"></a>
        <a href="https://github.com/dannywuwu"></a>
        <a href="https://www.linkedin.com/in/wuda/"></a>
      </div>
      <ul className="nav-list">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
