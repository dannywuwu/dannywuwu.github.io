import React from "react";
import { Card } from "./Card";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-wrapper">
      <div className="intro">
        <img src="" alt="danny" />
        <p>
          Nice to meet you! I am a Software Engineering student (SE 2024) at the
          University of Waterloo, looking for fun software to play around with.
        </p>
      </div>
      <div className="stats">
        <h1>Stats</h1>
        <Card>
          <h3>Coding</h3>
          <p>
            Python + VIM are my go-to when I need to cook up something quick.
            I'm also interested in functional programming (thanks to Racket!).
          </p>
        </Card>
        <Card>
          <h3>Music</h3>
          <p>
            Music instruments have been a big part of my life from a young age;
            I received my Associate Diploma (ARCT) in piano performance in 2019
            and I also play flute and recorder.
          </p>
        </Card>
        <Card>
          <h3>Talk to me about:</h3>
          <ul>
            <li>Calisthenics</li>
            <li>Manga</li>
            <li>Asian Pop</li>
            <li>Bubble Tea</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
