import React from "react";
import IPage from "../../../interface/page";
import { ProjectMain } from "../../../styles";

const Hearth: React.FunctionComponent<IPage> = (props) => {
  return (
    <ProjectMain>
      <h2>Hearth</h2>
      <p>
        Hearth is a single-page web application that offers complete curated collections of furniture for people who want to nest (but don't know where to start!).
        <ul>
          <li>
            Utilizes the PERN stack to create a single-page application for fast loading and realtime database updates.
          </li>
          <li>
            Admin-centered controls that allows CRUD API requests to adjust PostgreSQL database.
          </li>
          <li>
            Designed with HTML/CSS and MaterialUI for intuitive and easy-to-use user experience.
          </li>
        </ul>
      </p>
    </ProjectMain>
  );
};

export default Hearth;
