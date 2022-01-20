import React from "react";
import { Main } from '../styles';
import Loading from "./loading/Loading";
import About from "./About";

function App() {
  return (
    <Main>
      <Loading />
      <About />
      {/* <Header /> */}
      {/* Snippet */}
      {/* <Footer /> */}
    </Main>
  );
}

export default App;
