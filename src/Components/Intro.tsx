import React from "react";
import "../res/styles/Intro.scss";
import { Navbox } from "./Navbox";

interface IntroProps {}

export const Intro = (props: IntroProps) => {
  return (
    <div className="intro-wrapper">
      <div className="header-intro">
        <h1 id="intro-name">Danny Wu</h1>
        <Navbox></Navbox>
      </div>
      <div className="about-intro">
        <h1 className="section-title" id="about">
          About
        </h1>
        <img src="images/dw.png" alt="danny" />
        <p>
          Nice to meet you! I am a Software Engineering student (SE 2024) at the
          University of Waterloo, looking for fun programs to play around with.
        </p>
      </div>
    </div>
  );
};
