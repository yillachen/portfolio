import React from "react";
import { Link } from 'react-router-dom';
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
        <Link to="/projects/mesh">Mesh</Link>
        <Link to="/projects/hearth">Hearth</Link>
      </ProjectMain>
    </motion.div>
  );
};

export default Projects;
