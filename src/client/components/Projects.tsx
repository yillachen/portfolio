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
import FeaturedHearth from "./projects/featured-hearth";
import FeaturedMesh from "./projects/featured-mesh";

const Projects: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <br />
      <h3>Featured Projects</h3>
      <ProjectMain>
        <FeaturedMesh name={"Featured: Mesh"} />
        <FeaturedHearth name={"Featured: Hearth"} />
      </ProjectMain>
    </motion.div>
  );
};

export default Projects;
