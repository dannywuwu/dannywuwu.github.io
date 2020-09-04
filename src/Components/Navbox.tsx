import React from "react";

interface NavboxProps {}

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    <div className="nav-wrapper">
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
