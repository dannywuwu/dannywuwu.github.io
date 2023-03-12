import React from "react";
import "../res/styles/Profile.scss";
import HiddenVisibleAnimation from "./HiddenVisibleAnimation";

interface ProfileProps {}

export const Profile = (props: ProfileProps) => {
  return (
    <div className="profile-wrapper">
      <HiddenVisibleAnimation duration={0.5}>
        <img src="images/dw.png" alt="danny" id="portrait" />
        <p id="portrait-info">
          Nice to meet you! I am a Software Engineering student (SE 2024) at the
          University of Waterloo, looking for fun programs to play around with.
        </p>
      </HiddenVisibleAnimation>
    </div>
  );
};
