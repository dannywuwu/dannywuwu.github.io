import React from "react";
import { Timeline } from "./Timeline";

interface NewsProps {}

const experiences: Record<string, string> = {
  "Sept 2021":
    "Back at Smart & Biggar, performing NLP analysis and data engineering in Python with some Angular fullstack development on the side.",
};

export const News: React.FC<NewsProps> = (props: NewsProps) => {
  return (
    <div className="news-wrapper">
      <h1 className="section-title" id="news">
        News
      </h1>
      <Timeline entries={experiences}></Timeline>
    </div>
  );
};
