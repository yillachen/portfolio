import React, { useState, useEffect } from "react";
import IPage from "../../../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import PageLoader from "../loading/PageLoader";
import MeshContent from "./mesh-content";

const Mesh: React.FunctionComponent<IPage> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => setLoading(false), 1250);
    };
    delay();
    return () => console.log("Unmounting...");
  }, []);

  if (loading) {
    return <PageLoader />;
  }

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
