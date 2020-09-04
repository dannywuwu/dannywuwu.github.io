import React from "react";
import { Card } from "./Card";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-wrapper">
      <div className="intro">
        <img src="" alt="danny" />
        <p>
          Nice to meet you! I am a Software Engineering student at the
          University of Waterloo.
        </p>
      </div>
      <div className="stats">
        <h1>Stats</h1>
        <Card>
          <h3>Web Development</h3>
          <p>Combo of choice: React + TypeScript (used for this website!)</p>
        </Card>
        <Card>
          <h3>Coding</h3>
          <p>
            Python + VIM are my go-to when I need to code up something quick, I
            also have a considerable amount of experience with C++ and Java.
          </p>
        </Card>
        <Card>
          <h3>Music</h3>
          <p>Piano </p>
        </Card>
        <Card>
          <h3>Bubble Tea</h3>
          <p>Rose Oolong Milk Tea: 50% honey, no ice, pearls</p>
        </Card>
      </div>
    </div>
  );
};
