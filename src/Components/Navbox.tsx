import { motion } from "framer-motion";
import React from "react";
import "../res/styles/Navbox.scss";

interface NavboxProps {}

const navItems: Array<string> = ["About", "News", "Projects", "Contact"];

const navContainer = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Navbox: React.FC<NavboxProps> = () => {
  return (
    <div className="nav-wrapper">
      <motion.ul
        className="nav-box"
        variants={navContainer}
        initial="hidden"
        animate="visible"
      >
        {navItems.map((navItem) => {
          return (
            <a href={`#${navItem}`} key={navItem}>
              <motion.li variants={item}>{navItem}</motion.li>
            </a>
          );
        })}
      </motion.ul>
    </div>
  );
};
