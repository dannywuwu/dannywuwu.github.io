import React from "react";

interface Props {
  date: string;
  description: string;
}

export const TimelineEntry = (props: Props) => {
  const { date, description } = props;
  return (
    <div className="timeline-entry">
      <i>{date}</i>
      <p>{description}</p>
    </div>
  );
};
