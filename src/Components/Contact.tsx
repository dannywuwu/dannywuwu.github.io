import React, { ReactNode } from "react";
import { ReactComponent as ClipboardSvg } from "../res/icons/clipboard.svg";
import { ReactComponent as GithubSvg } from "../res/icons/github.svg";
import { ReactComponent as LinkedinSvg } from "../res/icons/linkedin.svg";
import { ReactComponent as MailSvg } from "../res/icons/mail.svg";

import Resume from "../res/DannyWuResume.pdf";

import "../res/styles/Contact.scss";
import HoverAnimation from "./HoverAnimation";

interface ContactProps {}

interface ContactEntry {
  href: string;
  icon: ReactNode;
}

const contacts: ContactEntry[] = [
  {
    href: "mailto: d246wu@gmail.com",
    icon: <MailSvg />,
  },
  {
    href: "https://github.com/dannywuwu",
    icon: <GithubSvg />,
  },
  {
    href: "https://www.linkedin.com/in/wuda/",
    icon: <LinkedinSvg />,
  },
  {
    href: Resume,
    icon: <ClipboardSvg />,
  },
];

export const Contact = (props: ContactProps) => {
  return (
    <div className="contact-wrapper">
      <h1 className="section-title" id="Contact">
        Contact
      </h1>
      <div className="contact-row">
        {/* eslint-disable-next-line */}
        {contacts.map((contact: ContactEntry, i: number) => {
          const { href, icon } = contact;
          return (
            <HoverAnimation scale={1.1}>
              <a href={href} target="_blank" rel="noreferrer noopener">
                {icon}
              </a>
            </HoverAnimation>
          );
        })}
      </div>
    </div>
  );
};
