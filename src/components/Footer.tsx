import React from "react";
import IPage from "../interface/page";
import { BottomBar, BottomLinks, Nav } from "../styles";

const Footer: React.FunctionComponent<IPage> = (props) => {
  return (
    <BottomBar>
      <BottomLinks>
        <Nav>
          <a
            href="https://linkedin.com/in/yilla-chen"
            className="nav"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </Nav>
        <Nav>
          <a
            href="https:/github.com/yillachen"
            target="_blank"
            className="nav"
            rel="noreferrer"
          >
            GitHub
          </a>
        </Nav>
      </BottomLinks>
      &copy; Designed with &hearts; by Yilla Chen, 2022
    </BottomBar>
  );
};

export default Footer;
