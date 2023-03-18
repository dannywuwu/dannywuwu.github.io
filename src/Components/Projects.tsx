import React from "react";
import { ProjectCard } from "./ProjectCard";
import "../res/styles/Projects.scss";
import HiddenVisibleAnimation from "./HiddenVisibleAnimation";

interface ProjectsProps {}

export interface Project {
  name: string;
  tags: string[];
  date: string;
  desc: string;
  url?: string;
  imgPath: string;
}

const projects: Project[] = [
  {
    name: "Things2Do",
    tags: ["React", "Express", "Yelp", "OpenStreetMap", "Tailwind", "NFT"],
    date: "Jan 2023",
    desc: "A day trip planner that dynamically generates custom trip itineraries based on user preferences.",
    url: "https://github.com/dannywuwu/Things2Do",
    imgPath: "things2do.png",
  },
  {
    name: "Video Guesser",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "Socket.IO",
      "Ant Design",
      "Youtube",
    ],
    date: "Oct 2021",
    desc: "An multiplayer Youtube video trivia game to play with friends.",
    url: "https://github.com/dannywuwu/video-guesser",
    imgPath: "video-guesser.png",
  },
  {
    name: "Picture Police",
    tags: ["Python", "Flask", "Discord", "OCR", "PIL", "NLTK"],
    date: "Sept 2021",
    desc: "A Discord bot that analyzes and censors explicit images and profanity.",
    url: "https://github.com/dannywuwu/picture-police",
    imgPath: "picture-police.png",
  },
  {
    name: "Aang",
    tags: ["React", "Tensorflow", "Chakra UI", "Posenet"],
    date: "Jan 2021",
    desc: "A mindful webapp to track body posture while working at a computer with a webcam.",
    url: "https://github.com/dannywuwu/Aang",
    imgPath: "aang.png",
  },
  {
    name: "Colour Detection Robot",
    tags: ["Arduino", "C++"],
    date: "Nov 2019",
    desc: "An autonomous Arduino car with colour detection.",
    url: "https://github.com/dannywuwu/Hokey-Pokey-Colour-Detection",
    imgPath: "hokey-pokey.png",
  },
  {
    name: "Dodger",
    tags: ["Java", "Game"],
    date: "Dec 2018",
    desc: "A 2D dodging game written in Java with custom sprites where players dodge falling objects.",
    url: "https://github.com/dannywuwu/Dodger",
    imgPath: "dodger.png",
  },
];

export const Projects = (props: ProjectsProps) => {
  return (
    <div className="projects-wrapper">
      <HiddenVisibleAnimation duration={0.5}>
        <h1 className="section-title" id="Projects">
          Projects
        </h1>
      </HiddenVisibleAnimation>
      <div className="project-list">
        {projects.map((project: Project, i: number) => {
          return (
            <HiddenVisibleAnimation duration={0.5 + 0.05 * i}>
              <ProjectCard key={i} project={project} position={i}></ProjectCard>
            </HiddenVisibleAnimation>
          );
        })}
      </div>
    </div>
  );
};
