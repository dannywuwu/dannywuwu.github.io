import React from "react";

interface TimelineProps {}

export const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  return (
    <div className="timeline-wrapper">
      <h1 className="section-title" id="news">
        News
      </h1>
    </div>
  );
};
