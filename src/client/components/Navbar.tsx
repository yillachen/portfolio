import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { springTransition, springVariant } from "../../config/transition";
import IPage from "../../interface/page";
import { Header, Nav } from "../../styles";

const Navbar: React.FunctionComponent<IPage> = (props) => {
  const active = {
    color: "#4c47a0"
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
          <h1 className="title">
            <Link to="/">Yilla Chen</Link>
          </h1>
          <div className="navigation">
            <Nav>
              <NavLink to="/about" activeStyle={active}>
                <h3 className="nav">About</h3>
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/projects" activeStyle={active}>
                <h3 className="nav">Projects</h3>
              </NavLink>
            </Nav>
          </div>
        </Header>
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
