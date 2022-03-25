import React, { useState, useEffect } from "react";
import GlobalFonts, { Main } from "../css/styles";
import Routes from "./components/Routes";
import IPage from "../interface/page";
import Loading from "./components/loading/Loading";
import "../css/styles.scss";

const App: React.FunctionComponent<IPage> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => setLoading(false), 1500);
    };
    delay();
    return () => console.log("Unmounting...");
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Main>
      <GlobalFonts />
      <Routes />
    </Main>
  );
};

export default App;
