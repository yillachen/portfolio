import React from "react";
import { Main } from "../styles";
import Routes from './Routes'
import Navbar from "./Navbar";

function App() {

  return (
    <Main>
      <Navbar name={""} />
      <Routes />
    </Main>
  );
}

export default App;
