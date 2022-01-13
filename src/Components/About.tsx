import React from "react";
import "../res/styles/About.scss";

interface AboutProps {}

export const About = (props: AboutProps) => {
  return (
    <div className="about-wrapper">
      <div className="portrait-container">
        <img src="images/dw.png" alt="danny" id="portrait" />
        <p id="portrait-info">
          Nice to meet you! I am a Software Engineering student (SE 2024) at the
          University of Waterloo, looking for fun programs to play around with.
        </p>
      </div>
    </div>
  );
};
