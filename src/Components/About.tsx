import React from "react";

interface AboutProps {}

export const About = (props: AboutProps) => {
  return (
    <div className="about-wrapper">
      <h1 className="section-title" id="about">
        About
      </h1>
      <div className="portrait-container">
        <img src="images/dw.png" alt="danny" />
        <p>
          Nice to meet you! I am a Software Engineering student (SE 2024) at the
          University of Waterloo, looking for fun programs to play around with.
        </p>
      </div>
    </div>
  );
};
