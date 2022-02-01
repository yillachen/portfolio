import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "../config/routes";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Body } from "../styles";

const Routes: React.FunctionComponent<{}> = (props) => {
  return (
    <BrowserRouter>
      <Navbar name={"Navbar"} />
      <Body>
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
      </Body>
      <Footer name={"Footer"} />
    </BrowserRouter>
  );
};

export default Routes;
