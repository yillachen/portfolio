import React from "react";
import { Main } from "../styles";
import Loading from "./loading/Loading";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";

function App() {

  return (
    <Main>
      <Navbar />
      <About />
    </Main>
  );
}

export default App;
