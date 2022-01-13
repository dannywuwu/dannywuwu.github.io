import React from "react";
import "../res/styles/Intro.scss";
import { Navbox } from "./Navbox";

interface IntroProps {}

export const Intro = (props: IntroProps) => {
  return (
    <div className="intro-wrapper">
      <div className="intro-text">
        <h1 id="intro-name">Danny Wu</h1>
        <p id="intro-education">University of Waterloo SE24</p>
      </div>
      <Navbox></Navbox>
    </div>
  );
};
