import React from "react";
import { Link } from "react-router-dom";
import IPage from "../../interface/page";
import { ProjectMain } from "../../styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../config/transition";

const Projects: React.FunctionComponent<IPage> = (props) => {
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
          <div className="project">
            <h2 className="hover-underline-animation">Mesh</h2>
            <h3>Mobile application</h3>
          </div>
        </Link>
        <Link to="/projects/hearth">
          <div className="project">
            <h2 className="hover-underline-animation">Hearth</h2>
            <h3>E-commerce website</h3>
          </div>
        </Link>
      </ProjectMain>
    </motion.div>
  );
};

export default Projects;
