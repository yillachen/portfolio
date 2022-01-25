import React from "react";
import { Main } from "../styles";
import Routes from "./Routes";
import IPage from "../interface/page";
import GlobalFonts from '../styles'

const App: React.FunctionComponent<IPage> = props => {
  return (
    <Main>
      <GlobalFonts />
      <Routes />
    </Main>
  );
}

export default App;
