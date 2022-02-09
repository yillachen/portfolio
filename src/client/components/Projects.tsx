import React, { useState } from "react";
import { Link } from "react-router-dom";
import IPage from "../../interface/page";
import { ProjectMain, Project } from "../../styles";
import { motion } from "framer-motion";
import {
  fadeTransition,
  fadeVariant,
  slideTransition,
  slideVariant,
} from "../../config/transition";

const Projects: React.FunctionComponent<IPage> = (props) => {
  const [showMesh, setMesh] = useState(false);
  const [showHearth, setHearth] = useState(false);

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <ProjectMain>
        <Link to="/projects/mesh">
          <Project
            onMouseEnter={() => setMesh(true)}
            onMouseLeave={() => setMesh(false)}
          >
            <h2 className="projTitle">Mesh</h2>
            {showMesh ? (
              <motion.div
                animate="in"
                initial="out"
                exit="out"
                variants={slideVariant}
                transition={slideTransition}
              >
                <div className="snippet">
                  <h4>A personal safety app with heatmap & auto-texts.</h4>
                </div>
              </motion.div>
            ) : (
              <h3>Mobile Application</h3>
            )}
          </Project>
        </Link>
        <Link
          to="/projects/hearth"
          onMouseEnter={() => setHearth(true)}
          onMouseLeave={() => setHearth(false)}
        >
          <Project>
            <h2 className="projTitle">Hearth</h2>
            {showHearth ? (
              <motion.div
                animate="in"
                initial="out"
                exit="out"
                variants={slideVariant}
                transition={slideTransition}
              >
                <div className="snippet">
                  <h4>A mock online boutique built with the PERN stack.</h4>
                </div>
              </motion.div>
            ) : (
              <h3>E-commerce website</h3>
            )}
          </Project>
        </Link>
      </ProjectMain>
    </motion.div>
  );
};

export default Projects;
