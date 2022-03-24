import React from "react";
import IPage from "../../../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import HearthContent from "./hearth-content";

const Hearth: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
      style={{ textAlign: "center" }}
    >
      <HearthContent name={"Hearth Content"} />
    </motion.div>
  );
};

export default Hearth;
