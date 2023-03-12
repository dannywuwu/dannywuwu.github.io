import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration: number;
  htmlClass?: string[];
};

const hiddenVisible = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HiddenVisibleAnimation = (props: Props) => {
  const { children, duration, htmlClass } = props;
  return (
    <motion.div
      className={`hidden-visible-wrapper ${
        htmlClass ? htmlClass.join(" ") : ""
      }`}
      variants={hiddenVisible}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration }}
      style={{ margin: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default HiddenVisibleAnimation;
