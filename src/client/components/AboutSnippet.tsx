import { motion } from "framer-motion";
import React from "react";
import IPage from "../../interface/page";
import { fadeTransition, fadeVariant } from "../../config/transition";

const AboutSnippet: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <div className="about-snippet">
        <h1>Former marketing manager turned full-stack developer, bridging beautiful user experiences with chic design.</h1>
      </div>
    </motion.div>
  );
};

export default AboutSnippet;
