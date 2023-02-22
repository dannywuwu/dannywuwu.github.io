import React from "react";
import "../res/styles/About.scss";
import { Card } from "./Card";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-wrapper">
      <h1 className="section-title" id="About">
        About
      </h1>
      <div className="about-section">
        {/* Coding */}
        <div className="coding-about">
          <h2 className="subsection-title">Coding</h2>
          <Card title={"Languages"}>
            <p>
              Python • C# • C++ • C • Java • SQL • JavaScript (TypeScript) •
              HTML/CSS (Sass)
            </p>
          </Card>
          <Card title={"Frameworks"}>
            <p>
              React/Redux • React Native • Angular • Flask • Node • Express •
              ASP.NET Core • Dapper ORM
            </p>
          </Card>
          <Card title={"Tools"}>
            <p>Vim • Git • Firebase • Bash • Docker • Websockets • Jest</p>
          </Card>
        </div>
        {/* Personal */}
        <div className="personal-about">
          <h2 className="subsection-title">Personal</h2>
          <Card title={"Music"}>
            <p>
              I play piano at the ARCT level, as well as flute and recorder to a
              lesser degree. I also love listening to jazz fusion.
            </p>
          </Card>
          <Card title={"Hobbies"}>
            In my free time, I enjoy engaging in bodyweight fitness and reading
            manga. I am currently restricting my consumption of milk tea.
          </Card>
        </div>
      </div>
    </div>
  );
};
