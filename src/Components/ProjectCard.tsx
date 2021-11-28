import React from "react";
import { Project } from "./Projects";

interface ProjectCardProps {
  project: Project;
  position: number;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const {
    project: { name, tags, date, desc, url, imgPath },
    position,
  } = props;
  return (
    <article className="project-card">
      <a href={url}>
        <img src={imgPath} alt={`${name} preview`} />
      </a>
      <div className="project-info">
        <h3>{name}</h3>
        <i>{date}</i>
        <p>{desc}</p>
      </div>
    </article>
  );
};
