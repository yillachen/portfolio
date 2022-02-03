import React from "react";
import IPage from "../../interface/page";
import { ProjectMain } from "../../styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../config/transition";

const Mesh: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <ProjectMain>
        <h2>Mesh</h2>
        <p>
          Mesh is a personal safety app that helps you find the safest path to
          your destination, plus automatically alerts your friends if anything
          unexpected happens during your trip.
        </p>
        <ul>
          <li>
            Plan your safest routes around town with a crime-density heat map
            that uses over 300,000 reported incidents via the NYC public
            database.
          </li>
          <li>
            Create trusted groups of contacts, called Safety Nets, who receive
            your notifications and SOS signals.
          </li>
          <li>
            Send automatic messages to your Safety Nets when you get home, reach
            safe-points in your journey, or if something goes wrong.
          </li>
          <li>
            Contribute to Mesh's safety data by filing your own incident
            reports.
          </li>
        </ul>
      </ProjectMain>
    </motion.div>
  );
};

export default Mesh;
