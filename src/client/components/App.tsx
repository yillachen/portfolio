import React from "react";
import GlobalFonts, { Main } from "../../styles";
import Routes from "./Routes";
import IPage from "../../interface/page";

const App: React.FunctionComponent<IPage> = props => {
  return (
    <Main>
      <GlobalFonts />
      <Routes />
    </Main>
  );
}

export default App;
