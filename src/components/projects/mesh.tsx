import React from "react";
import IPage from "../../interface/page";
import { ProjectMain } from "../../styles";

const Mesh: React.FunctionComponent<IPage> = (props) => {
  return (
    <ProjectMain>
      <h2>Mesh</h2>
      <p>
        Mesh is a personal safety app that helps you find the safest path to
        your destination, plus automatically alerts your friends if anything
        unexpected happens during your trip.
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
      </p>
    </ProjectMain>
  );
};

export default Mesh;
