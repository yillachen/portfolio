import React, { useState, useEffect } from "react";
import IPage from "../../../interface/page";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import HearthContent from "./hearth-content";
import PageLoader from "../loading/PageLoader";

const Hearth: React.FunctionComponent<IPage> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => setLoading(false), 1500);
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
      <HearthContent name={"Hearth Content"} />
    </motion.div>
  );
};

export default Hearth;
