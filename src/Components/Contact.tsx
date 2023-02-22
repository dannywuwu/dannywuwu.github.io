import React from "react";
import { ReactComponent as ClipboardSvg } from "../res/icons/clipboard.svg";
import { ReactComponent as GithubSvg } from "../res/icons/github.svg";
import { ReactComponent as LinkedinSvg } from "../res/icons/linkedin.svg";
import { ReactComponent as MailSvg } from "../res/icons/mail.svg";

import Resume from "../res/DannyWuResume.pdf";

import "../res/styles/Contact.scss";

interface ContactProps {}

export const Contact = (props: ContactProps) => {
  return (
    <div className="contact-wrapper">
      <h1 className="section-title" id="Contact">
        Contact
      </h1>
      <div className="contact-row">
        {/* eslint-disable-next-line */}
        <a href="mailto: d246wu@gmail.com">
          <MailSvg />
        </a>
        <a
          href="https://github.com/dannywuwu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubSvg />
        </a>
        <a
          href="https://www.linkedin.com/in/wuda/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedinSvg />
        </a>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <ClipboardSvg />
        </a>
      </div>
    </div>
  );
};
