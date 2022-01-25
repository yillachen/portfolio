import React from "react";
import IPage from "../interface/page";
import { BottomBar, BottomLinks, NavLink } from "../styles";

const Footer: React.FunctionComponent<IPage> = (props) => {
  return (
    <BottomBar>
      <BottomLinks>
        <NavLink>
          <a
            href="https://linkedin.com/in/yilla-chen"
            className="nav"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </NavLink>
        <NavLink>
          <a
            href="https:/github.com/yillachen"
            target="_blank"
            className="nav"
            rel="noreferrer"
          >
            GitHub
          </a>
        </NavLink>
      </BottomLinks>
      &copy; Designed with &hearts; by Yilla Chen, 2022
    </BottomBar>
  );
};

export default Footer;
