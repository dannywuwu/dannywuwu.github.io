import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  scale: number;
  htmlClass?: string[];
};

const HoverAnimation = (props: Props) => {
  const { children, scale, htmlClass } = props;
  return (
    <motion.div
      className={`hover-wrapper ${htmlClass ? htmlClass.join(" ") : ""}`}
      whileHover={{ scale }}
      style={{ margin: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverAnimation;
