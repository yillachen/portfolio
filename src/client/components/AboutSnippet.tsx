import { motion } from "framer-motion";
import React from "react";
import IPage from "../../interface/page";
import { AboutFlex, Column, List, Desc } from "../../styles";
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
      <AboutFlex>
          <Desc>
            <h2>
              <span style={{ fontStyle: "italic" }}>Nice to e-meet you!</span>
            </h2>
            <p>
              My name is Yilla and I'm a motivated, forward-thinking{" "}
              <span style={{ fontStyle: "italic" }}>Full Stack Engineer</span>,
              born and raised in Brooklyn. I'm passionate about creating
              impactful intuitive applications and modernizing technology so it's
              accessible for everyone.
            </p>
          </Desc>

      </AboutFlex>
    </motion.div>
  );
};

export default AboutSnippet;
