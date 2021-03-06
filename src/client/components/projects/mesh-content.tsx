import React from "react";
import IPage from "../../../interface/page";
import { ProjList, ProjFlex } from "../../../css/styles";
import mesh from "../../images/mesh.gif";

const MeshContent: React.FunctionComponent<IPage> = (props) => {
  return (
    <>
      <h1>Mesh</h1>
      <div>
        <div className="heroProj">
          <img src={mesh} className="active" alt="Mesh" />
          <div>
            <h3>Mesh is a mobile application </h3>
            <p>
              built with React Native connected to a NoSQL database via
              Firebase, and deployed on Expo. This personal safety app is
              designed to find the safest route to your destination using the
              Google Maps API. (Not currently available for download.)
            </p>
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
          </div>
        </div>
        <br />
        <>
          <h3>Key Features Implemented</h3>
          <ProjFlex>
            <ProjList>
              Plan your safest routes with a crime-density heat map that uses
              over 300,000 reported incidents via the NYC public database.
            </ProjList>
            <ProjList>
              Create trusted groups of contacts, called Safety Nets, who receive
              notifications of your journeys & SOS signals.
            </ProjList>
            <ProjList>
              Turn on automatic messages to your friends when you arrive at your
              destination, or when there's an unscheduled pit stop.
            </ProjList>
          </ProjFlex>
        </>
      </div>
      <div className="videoWrapper">
        <iframe
          title="Mesh Demo Video"
          src="https://player.vimeo.com/video/678746712?h=3bfd78efaf"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="view-box">
        <div style={{ display: "flex", flexDirection: "column" }}>
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
        </div>
      </div>
    </>
  );
};

export default MeshContent;
