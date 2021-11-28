import React from "react";

interface TimelineEntryProps {
  date: string;
  description: string;
}

export const TimelineEntry = (props: TimelineEntryProps) => {
  const { date, description } = props;
  return (
    <div className="timeline-entry">
      <i>{date}</i>
      <p>{description}</p>
    </div>
  );
};
