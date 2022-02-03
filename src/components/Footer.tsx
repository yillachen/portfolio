import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import IPage from "../interface/page";
import { BottomBar, BottomLinks, Nav } from "../styles";
import { bSpringTransition, bSpringVariant } from "../config/transition";

const Footer: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={bSpringVariant}
      transition={bSpringTransition}
    >
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
    </motion.div>
  );
};

export default Footer;
