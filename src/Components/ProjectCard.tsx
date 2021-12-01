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
    <div className="project-card">
      <a href={url} className="img-link">
        <img src={imgPath} alt={`${name} preview`} />
      </a>
      <div className="project-info">
        <h3>{name}</h3>
        <i>{date}</i>
        <p>{desc}</p>
        <p className="tags">Tags: {tags.join(", ")}</p>
      </div>
    </div>
  );
};
