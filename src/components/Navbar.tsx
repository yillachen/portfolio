import React from "react";
import { Link } from 'react-router-dom';
import IPage from "../interface/page";
import { Header, H1 } from "../styles";

const Heading: React.FunctionComponent<IPage> = props => {
  return (
    <Header>
      <H1>Yilla Chen</H1>

      Projects
      {/* <Link to="/about">About</Link> */}
    </Header>
  );
}

export default Heading;
