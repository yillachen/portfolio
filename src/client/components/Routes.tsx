import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "../../config/routes";
import Navbar from "./Navbar";
import { Body } from "../../css/styles";
import { AnimatePresence, motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../config/transition";
import Footer from "./Footer";
import Gradient from "./Gradient";

const Routes: React.FunctionComponent<{}> = (props) => {
  return (
    <BrowserRouter>
      <Navbar name={"Navbar"} />
      <motion.div
        animate="in"
        initial="out"
        exit="out"
        variants={fadeVariant}
        transition={fadeTransition}
      >
        <Body>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(props: RouteComponentProps<any>) => (
                      <route.component
                        name={route.name}
                        {...props}
                        {...route.props}
                      />
                    )}
                  />
                );
              })}
            </Switch>
          </AnimatePresence>
        </Body>
        <Footer name={"Footer"} />
      </motion.div>
      <Gradient />
    </BrowserRouter>
  );
};

export default Routes;
