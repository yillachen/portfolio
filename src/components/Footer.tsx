import React from "react";
import { Link } from "react-router-dom";
import IPage from "../interface/page";
import { BottomBar, H1, Column, NavLink } from "../styles";

const Footer: React.FunctionComponent<IPage> = (props) => {
  return (
    <BottomBar>
      <NavLink><a href="https://linkedin.com/in/yilla-chen">LinkedIn</a></NavLink>
      <NavLink><a href="https:/github.com/yillachen">GitHub</a></NavLink>
    </BottomBar>
  );
};

export default Footer;
