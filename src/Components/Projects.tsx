import React from "react";
import { ProjectCard } from "./ProjectCard";
import "../res/styles/Projects.scss";

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
    name: "Picture Police",
    tags: ["Python", "Flask", "Discord", "OCR", "PIL", "NLTK"],
    date: "Sept 2021",
    desc: "A Discord bot that analyzes and censors explicit images and profanity.",
    url: "https://github.com/dannywuwu/picture-police",
    imgPath: "img.png",
  },
  {
    name: "Aang",
    tags: ["React", "Tensorflow", "Chakra UI", "Posenet"],
    date: "Jan 2021",
    desc: "A mindful webapp to track body posture while working at a computer with a webcam.",
    url: "https://github.com/dannywuwu/Aang",
    imgPath: "img.png",
  },
  {
    name: "Colour Detection Robot",
    tags: ["Arduino", "C++"],
    date: "Nov 2019",
    desc: "An autonomous Arduino car with colour detection.",
    url: "https://github.com/dannywuwu/Hokey-Pokey-Colour-Detection",
    imgPath: "img.png",
  },
  {
    name: "Dodger",
    tags: ["Java"],
    date: "Dec 2018",
    desc: "A 2D dodging game written in Java with custom sprites where players dodge falling objects.",
    url: "https://github.com/dannywuwu/Dodger",
    imgPath: "img.png",
  },
];

export const Projects = (props: ProjectsProps) => {
  return (
    <div className="projects-wrapper">
      <h1 className="section-title" id="projects">
        Projects
      </h1>
      {projects.map((project: Project, i: number) => {
        return (
          <ProjectCard key={i} project={project} position={i}></ProjectCard>
        );
      })}
    </div>
  );
};
