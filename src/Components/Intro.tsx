import React from "react";
import "../res/styles/Intro.scss";
import { Navbox } from "./Navbox";

interface Props {}

export const Intro = (props: Props) => {
  return (
    <div className="intro-wrapper">
      <h1 id="intro-name">Danny Wu</h1>
      <Navbox></Navbox>
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
