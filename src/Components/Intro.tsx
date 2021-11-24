import React from "react";
import "../res/styles/Intro.scss";
import { Navbox } from "./Navbox";

interface Props {}

export const Intro = (props: Props) => {
  return (
    <div className="intro-wrapper">
      <h1 className="intro-name">Danny Wu</h1>
      <Navbox></Navbox>
    </div>
  );
};
