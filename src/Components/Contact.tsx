import React from "react";
import { ReactComponent as ClipboardSvg } from "../res/icons/clipboard.svg";
import { ReactComponent as GithubSvg } from "../res/icons/github.svg";
import { ReactComponent as LinkedinSvg } from "../res/icons/linkedin.svg";
import { ReactComponent as MailSvg } from "../res/icons/mail.svg";

interface ContactProps {}

export const Contact = (props: ContactProps) => {
  return (
    <div className="contact-wrapper">
      <h1 className="section-title" id="contact">
        Contact
      </h1>
      <div className="contact-row">
        {/* eslint-disable-next-line */}
        <a href="">
          <ClipboardSvg />
        </a>
        <a href="https://github.com/dannywuwu">
          <GithubSvg />
        </a>
        <a href="mailto: d246wu@gmail.com">
          <LinkedinSvg />
        </a>
        <a href="https://www.linkedin.com/in/wuda/">
          <MailSvg />
        </a>
      </div>
    </div>
  );
};
