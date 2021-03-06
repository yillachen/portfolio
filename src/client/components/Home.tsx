import React from "react";
import IPage from "../../interface/page";
import { ProjectMain } from "../../css/styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../config/transition";
import FeaturedHearth from "./projects/featured-hearth";
import FeaturedMesh from "./projects/featured-mesh";
import AboutSnippet from "./AboutSnippet";

const Home: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <AboutSnippet name={"About Snippet"} />
      <h3 className="featured">Featured Projects</h3>
      <ProjectMain>
        <FeaturedMesh name={"Featured: Mesh"} />
        <FeaturedHearth name={"Featured: Hearth"} />
      </ProjectMain>
    </motion.div>
  );
};

export default Home;
