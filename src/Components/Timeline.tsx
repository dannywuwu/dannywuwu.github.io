import React from "react";
import { TimelineEntry } from "./TimelineEntry";
import "../res/styles/Timeline.scss";

interface TimelineProps {
  entries: Record<string, string>;
}

export const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  const { entries } = props;
  const entryDates: string[] = Object.keys(entries);
  // map each entry to an entry element
  const entryItems: JSX.Element[] = entryDates.map(
    (date: string, i: number) => {
      const description = entries[date];
      return (
        <TimelineEntry
          key={i}
          date={date}
          description={description}
        ></TimelineEntry>
      );
    }
  );
  return <>{entryItems}</>;
};
