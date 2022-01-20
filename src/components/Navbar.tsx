import React from "react";
import { Link } from "react-router-dom";
import { Header, H1 } from "../styles";

function Heading() {
  return (
    <Header>
      <H1>Yilla Chen</H1>
      About
      Projects
      {/* <Link to="/about">About</Link> */}
    </Header>
  );
}

export default Heading;
