import React, { useState } from "react";
import IPage from "../interface/page";
import { ProjectMain } from "../styles";
import Mesh from "./projects/mesh";
import Hearth from "./projects/hearth";

const Projects: React.FunctionComponent<IPage> = (props) => {
  return (
    <ProjectMain>
      <Mesh name={"Mesh"} />
      <Hearth name={"Hearth"} />
    </ProjectMain>
  );
};

export default Projects;
