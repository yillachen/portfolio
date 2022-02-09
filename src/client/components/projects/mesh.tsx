import React, { useState, useEffect } from "react";
import IPage from "../../../interface/page";
import { ProjList, ProjFlex } from "../../../styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import mesh from "../../images/mesh.gif";
import PageLoader from "../loading/PageLoader";

const Mesh: React.FunctionComponent<IPage> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => setLoading(false), 2600);
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
      <h1>Mesh</h1>
      <div>
        <div className="heroProj">
          <img
            style={{ width: "60%", height: "60%", marginBottom: 25 }}
            src={mesh}
            alt="Mesh"
          />
          <div>
            <h3>
              Mesh is a mobile application built with React Native connected to
              a NoSQL database via Firebase, and deployed on Expo. This personal
              safety app is designed to find the safest route to your
              destination using the Google Maps API. (Not currently available
              for download.)
              <br />
              <br />
              <img
                alt="React Native"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                className="techIcon"
              />
              <img
                alt="Firebase"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                className="techIcon"
              />
              <img
                alt="Google Maps API"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg"
                className="techIcon"
              />
            </h3>
          </div>
        </div>
        <br />
        <>
          <h3>Key Features Implemented</h3>
          <ProjFlex>
            <ProjList>
              Plan your safest routes with a crime-density heat map
              that uses over 300,000 reported incidents via the NYC public
              database.
            </ProjList>
            <ProjList>
              Create trusted groups of contacts, called Safety Nets, who receive
              notifications of your journeys & SOS signals.
            </ProjList>
            <ProjList>
              Turn on automatic messages to your friends when you arrive at your destination, or when there's an unscheduled pit stop.
            </ProjList>
          </ProjFlex>
        </>
      </div>
      <br />
      <br />
      <iframe
        style={{ boxShadow: "0 0 15px #E0DEFF" }}
        width="80%"
        height="420px"
        src="https://www.youtube.com/embed/iIcVlc-Fi8o"
        title="YouTube video player"
        frameBorder="0"
      ></iframe>
      <br />
      <br />
      View the code on
      <br />
      <br />
      <a href="https://git.io/JDgMl" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt=""
          className="techIcon"
        />
      </a>
      <br />
      <br />
    </motion.div>
  );
};

export default Mesh;
