import React from "react";
import "../res/styles/Card.scss";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children, title } = props;
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};
