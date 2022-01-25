import React from "react";
import { Link, NavLink } from "react-router-dom";
import IPage from "../interface/page";
import { Header, Column, Nav } from "../styles";

const Navbar: React.FunctionComponent<IPage> = (props) => {
  const active = {
    backgroundColor: "#E5EF53",
    color: "#0F1433",
    paddingRight: 15,
    paddingLeft: 15,
  };

  return (
    <Header>
      <Link to="/">
        <h1>Yilla Chen</h1>
      </Link>
      <Column>
        <Nav>
          <NavLink to="/about" className="nav" activeStyle={active}>
            About
          </NavLink>
        </Nav>
        <Nav>
          <NavLink to="/projects" className="nav" activeStyle={active}>
            Projects
          </NavLink>
        </Nav>
      </Column>
    </Header>
  );
};

export default Navbar;
