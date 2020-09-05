import React from "react";
import "../res/styles/styles.scss";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
