import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import IPage from '../interface/page';
import { Main } from "../styles";

const Landing: React.FunctionComponent<IPage> = props => {
  return (
    <Main>
      This is the homepage.<br />
      <Link to="/about">About</Link>
    </Main>
  );
}

export default Landing;
