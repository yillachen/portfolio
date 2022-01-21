import React from "react";
import { Main } from "../styles";
import Routes from "./Routes";
import IPage from "../interface/page";

const App: React.FunctionComponent<IPage> = props => {
  return (
    <Main>
      <Routes />
    </Main>
  );
}

export default App;
