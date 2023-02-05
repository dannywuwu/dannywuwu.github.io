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
  const cardClass: string =
    position % 2 === 0 ? "project-card" : "project-card reverse";
  return (
    <div className={cardClass}>
      <div className="project-info">
        <h3>{name}</h3>
        <i>{date}</i>
        <p>{desc}</p>
        <a href={url} className="url" target="_blank" rel="noreferrer noopener">
          {url}
        </a>
      </div>
      <div className="project-media">
        <a
          href={url}
          className="img-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={`images/${imgPath}`} alt={`${name} preview`} />
        </a>
        <p className="tags">Tags: {tags.join(", ")}</p>
      </div>
    </div>
  );
};
