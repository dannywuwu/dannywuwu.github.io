import { motion } from "framer-motion";
import React from "react";
import "../res/styles/Profile.scss";

interface ProfileProps {}

const profile = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Profile = (props: ProfileProps) => {
  return (
    <div className="profile-wrapper">
      <motion.div
        className="portrait-container"
        variants={profile}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src="images/dw.png" alt="danny" id="portrait" />
        <p id="portrait-info">
          Nice to meet you! I am a Software Engineering student (SE 2024) at the
          University of Waterloo, looking for fun programs to play around with.
        </p>
      </motion.div>
    </div>
  );
};
