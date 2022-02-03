import React, { useState } from "react";
import IPage from "../interface/page";
import { ProjectMain } from "../styles";
import Mesh from "./projects/mesh";
import Hearth from "./projects/hearth";
import { motion } from "framer-motion";
import { fadeTransition, pageVariant } from "../config/transition";

const Projects: React.FunctionComponent<IPage> = (props) => {
  const [showMesh, setMesh] = useState(false);
  const [showHearth, setHearth] = useState(false);

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={pageVariant}
      transition={fadeTransition}
    >
      <ProjectMain>
        {!showMesh ? (
          <div
            onClick={() => {
              setMesh(true);
            }}
          >
            <h2>Mesh</h2>
          </div>
        ) : (
          <div
            onClick={() => {
              setMesh(false);
            }}
          >
            <Mesh name={"Mesh"} />
          </div>
        )}

        {!showHearth ? (
          <div
            onClick={() => {
              setHearth(true);
            }}
          >
            <h2>Hearth</h2>
          </div>
        ) : (
          <div
            onClick={() => {
              setHearth(false);
            }}
          >
            <Hearth name={"Hearth"} />
          </div>
        )}
      </ProjectMain>
    </motion.div>
  );
};

export default Projects;
