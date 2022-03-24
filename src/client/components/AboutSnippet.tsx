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
        <h2>
          <span style={{ fontStyle: "italic" }}>
            Full-stack Developer with a love for UI/UX design.
          </span>
        </h2>
      </div>
    </motion.div>
  );
};

export default AboutSnippet;
