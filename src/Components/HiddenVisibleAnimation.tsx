import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  duration: Number;
};

const hiddenVisible = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HiddenVisibleAnimation = (props: Props) => {
  const { children, duration } = props;
  return (
    <motion.div
      className="hidden-visible-wrapper"
      variants={hiddenVisible}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default HiddenVisibleAnimation;
