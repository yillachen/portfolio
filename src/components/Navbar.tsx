import React from "react";
import { Link } from "react-router-dom";
import IPage from "../interface/page";
import { Header, Column, NavLink } from "../styles";

const Navbar: React.FunctionComponent<IPage> = (props) => {
  return (
    <Header>
      <Link to="/">
        <h1>Yilla Chen</h1>
      </Link>
      <Column>
        <NavLink>
          <Link to="/about" className="nav">About</Link>
        </NavLink>
        <NavLink>
          <Link to="/projects" className="nav">Projects</Link>
        </NavLink>
      </Column>
    </Header>
  );
};

export default Navbar;
