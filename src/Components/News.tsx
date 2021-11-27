import React from "react";

interface NewsProps {}

const experiences = {
  "Sept 2021":
    "Back at Smart & Biggar, performing NLP and data engineering with some fullstack development on the side",
};

export const News: React.FC<NewsProps> = (props: NewsProps) => {
  return (
    <div className="news-wrapper">
      <h1 className="section-title" id="news">
        News
      </h1>
    </div>
  );
};
