import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { springTransition, springVariant } from "../../config/transition";
import IPage from "../../interface/page";
import { Header, Column, Nav } from "../../styles";

const Navbar: React.FunctionComponent<IPage> = (props) => {
  const active = {
    backgroundColor: "#E5EF53",
    color: "#0F1433",
    paddingRight: 15,
    paddingLeft: 15,
  };

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={springVariant}
      transition={springTransition}
    >
      <AnimatePresence exitBeforeEnter>
        <Header>
          <h1 id="title">
            <Link to="/">Yilla Chen</Link>
          </h1>
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
            <>
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
                  href="https://github.com/yillachen"
                  target="_blank"
                  className="nav"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Nav>
            </>
          </Column>
        </Header>
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
