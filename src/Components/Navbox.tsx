import React from "react";
import { ReactComponent as ClipboardSvg } from "../res/icons/clipboard.svg";
import { ReactComponent as GithubSvg } from "../res/icons/github.svg";
import { ReactComponent as LinkedinSvg } from "../res/icons/linkedin.svg";
import { ReactComponent as MailSvg } from "../res/icons/mail.svg";

interface NavboxProps {}

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    // resume, email, github, linkedin
    <div className="nav-wrapper">
      <div className="nav-icon-row">
        {/* eslint-disable-next-line */}
        <a href="">
          <ClipboardSvg />
        </a>
        <a href="mailto: d246wu@gmail.com">
          <GithubSvg />
        </a>
        <a href="https://github.com/dannywuwu">
          <LinkedinSvg />
        </a>
        <a href="https://www.linkedin.com/in/wuda/">
          <MailSvg />
        </a>
      </div>
      <ul className="nav-list">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
