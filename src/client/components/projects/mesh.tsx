import React from "react";
import IPage from "../../../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import MeshContent from "./mesh-content";

const Mesh: React.FunctionComponent<IPage> = (props) => {

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
      style={{ textAlign: "center" }}
    >
      <MeshContent name={"Mesh Content"} />
    </motion.div>
  );
};

export default Mesh;
