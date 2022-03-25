import React, { useState } from "react";
import { Link } from "react-router-dom";
import IPage from "../../../interface/page";
import { Project } from "../../../css/styles";
import { motion } from "framer-motion";
import { slideTransition, slideVariant } from "../../../config/transition";

const FeaturedHearth: React.FunctionComponent<IPage> = (props) => {
  const [showHearth, setHearth] = useState(false);

  return (
    <Link
      to="/projects/hearth"
      onMouseEnter={() => setHearth(true)}
      onMouseLeave={() => setHearth(false)}
    >
      <Project>
        <h2 className="projTitle">Hearth</h2>
        {showHearth ? (
          <motion.div
            animate="in"
            initial="out"
            exit="out"
            variants={slideVariant}
            transition={slideTransition}
          >
            <div className="snippet">
              <h4>A mock online boutique built with a custom cart & hashed authentication.</h4>
            </div>
          </motion.div>
        ) : (
          <h3>E-commerce website</h3>
        )}
      </Project>
    </Link>
  );
};

export default FeaturedHearth;
