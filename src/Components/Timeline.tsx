import React from "react";
import { TimelineEntry } from "./TimelineEntry";
import "../res/styles/Timeline.scss";
import HiddenVisibleAnimation from "./HiddenVisibleAnimation";

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
        <HiddenVisibleAnimation duration={0.5 + 0.05 * i}>
          <TimelineEntry
            key={i}
            date={date}
            description={description}
          ></TimelineEntry>
        </HiddenVisibleAnimation>
      );
    }
  );
  return <>{entryItems}</>;
};
