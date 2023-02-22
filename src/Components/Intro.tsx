import { motion } from "framer-motion";
import React from "react";
import "../res/styles/Intro.scss";
import { Navbox } from "./Navbox";

interface IntroProps {}

const intro = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const Intro = (props: IntroProps) => {
  return (
    <motion.div
      className="intro-wrapper"
      variants={intro}
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 1 }}
    >
      <div className="intro-text">
        <h1 id="intro-name">Danny Wu</h1>
        <p id="intro-education">University of Waterloo SE24</p>
      </div>
      <Navbox></Navbox>
    </motion.div>
  );
};
