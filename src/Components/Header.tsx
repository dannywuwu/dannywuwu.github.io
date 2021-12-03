import React from "react";
import "../res/styles/Header.scss";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = (props: HeaderProps) => {
  const { children } = props;
  return <header className="about-header">{children}</header>;
};
