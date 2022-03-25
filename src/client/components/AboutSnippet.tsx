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
        <h1>Full-stack Developer and former marketing manager from Brooklyn (Lenape).</h1>
      </div>
    </motion.div>
  );
};

export default AboutSnippet;
