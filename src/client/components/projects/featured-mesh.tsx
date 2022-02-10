import React, { useState } from "react";
import { Link } from "react-router-dom";
import IPage from "../../../interface/page";
import { Project } from "../../../styles";
import { motion } from "framer-motion";
import { slideTransition, slideVariant } from "../../../config/transition";

const Projects: React.FunctionComponent<IPage> = (props) => {
  const [showMesh, setMesh] = useState(false);
  return (
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
              <h4>A personal safety app that texts your contacts when you're en route & renders heatmap data.</h4>
            </div>
          </motion.div>
        ) : (
          <h3>Mobile Application</h3>
        )}
      </Project>
    </Link>
  );
};

export default Projects;
