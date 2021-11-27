import React from "react";
import { Timeline } from "./Timeline";

interface NewsProps {}

const experiences: Record<string, string> = {
  "Sept 2021":
    "Back at Smart & Biggar, building an NLP ML classification model and performing data engineering in Python. I also did some Angular fullstack development on the side.",
  "Jan 2021":
    "Started an internship at Smart & Biggar, developing a dashboard framework from scratch in ASP.NET Core and wrote its respective web API in C#.",
  "Jun 2020":
    "Joined a design project at UWaterloo and developed an app to organize and facilitate in-person events adhering to COVID guidelines.",
  "Sept 2019":
    "The beginning of my Software Engineering journey at the University of Waterloo.",
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
