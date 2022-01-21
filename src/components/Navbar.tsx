import React from "react";
import { Link } from "react-router-dom";
import IPage from "../interface/page";
import { Header, H1, Column, NavLink } from "../styles";

const Heading: React.FunctionComponent<IPage> = (props) => {
  return (
    <Header>
      <Link to="/">
        <H1>Yilla Chen</H1>
      </Link>
      <Column>
        <NavLink>
          <Link to="/about">About</Link>
        </NavLink>
        <NavLink>
          <Link to="/projects">Projects</Link>
        </NavLink>
      </Column>
    </Header>
  );
};

export default Heading;
