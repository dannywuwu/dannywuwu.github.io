import React from "react";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card-yr">{children}</div>;
};
