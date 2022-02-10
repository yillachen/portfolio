import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { springTransition, springVariant } from "../../config/transition";
import IPage from "../../interface/page";
import { Header, Nav } from "../../styles";

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
            <Link to="/" className="hover-underline">Yilla Chen</Link>
          </h1>
          <div style={{display: 'flex'}}>
            <Nav>
              <NavLink to="/about" className="hover-underline" activeStyle={active}>
                <h3 className="nav">About</h3>
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/projects" className="hover-underline" activeStyle={active}>
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
