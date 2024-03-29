import React from "react";
import "../res/styles/About.scss";
import { Card } from "./Card";
import HiddenVisibleAnimation from "./HiddenVisibleAnimation";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-wrapper">
      <HiddenVisibleAnimation duration={0.75}>
        <h1 className="section-title" id="About">
          About
        </h1>
      </HiddenVisibleAnimation>
      <HiddenVisibleAnimation duration={1}>
        <div className="about-section">
          {/* Coding */}
          <div className="coding-about">
            <h2 className="subsection-title">Coding</h2>
            <Card title={"Languages"}>
              <p>Python • Java • Scala • Kotlin • C# • C++ • C • Rust</p>
              <p>JavaScript • TypeScript • HTML/CSS • SQL</p>
            </Card>
            <Card title={"Frameworks"}>
              <p>Flask • Node • Express • ASP.NET Core • React/Redux</p>
              <p>Socket.IO • Hibernate • JUnit • Jest • PyTest</p>
            </Card>
            <Card title={"Tools"}>
              <p>Vim • Git • AWS • GCP • Bash • Docker</p>
            </Card>
          </div>
          {/* Personal */}
          <div className="personal-about">
            <h2 className="subsection-title">Personal</h2>
            <Card title={"Music"}>
              <p>
                I play piano at the ARCT level, as well as flute and recorder to
                a lesser degree. I also love listening to jazz fusion.
              </p>
            </Card>
            <Card title={"Hobbies"}>
              In my free time, I enjoy engaging in bodyweight fitness and
              reading manga. I am currently restricting my consumption of milk
              tea.
            </Card>
          </div>
        </div>
      </HiddenVisibleAnimation>
    </div>
  );
};
