import styled, { createGlobalStyle } from "styled-components";
import px2vw from "./utils/px2vw";

import Basis from "../src/fonts/BasisGrotesque.woff";
import Basis2 from "../src/fonts/BasisGrotesque.woff2";
import RobotoMono from "../src/fonts/RobotoMono.woff";
import RobotoMono2 from "../src/fonts/RobotoMono.woff2";
import Tiempos from "../src/fonts/TiemposFine.woff";
import Tiempos2 from "../src/fonts/TiemposFine.woff2";
import TiemposItalic from "../src/fonts/TiemposFineItalic.woff";
import TiemposItalic2 from "../src/fonts/TiemposFineItalic.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Basis Grotesque';
    src: local('Basis Grotesque'), local('Basis Grotesque'),
    url(${Basis2}) format('woff2'),
    url(${Basis}) format('woff');
    font-style: normal;
    font-weight: 300;
  },
  @font-face {
    font-family: 'Roboto Mono';
    src: local('Roboto Mono'), local('Roboto Mono'),
    url(${RobotoMono2}) format('woff2'),
    url(${RobotoMono}) format('woff');
    font-style: normal;
    font-weight: 300;
  },
  @font-face {
    font-family: 'Tiempos Fine';
    src: local('Tiempos Fine'), local('Tiempos Fine'),
    url(${Tiempos2}) format('woff2'),
    url(${Tiempos}) format('woff');
    font-style: normal;
    font-weight: 300;
  },
  @font-face {
    font-family: 'Tiempos Fine';
    src: local('Tiempos Fine'), local('Tiempos Fine'),
    url(${TiemposItalic2}) format('woff2'),
    url(${TiemposItalic}) format('woff');
    font-style: italic;
    font-weight: 300;
  }
`;

// Branded Colors
export const Colors = {
  lavender: "#E0DEFF",
  navy: "#0F1433",
  green: "#E5EF53",
  red: "#FF4724",
};

const { lavender, navy, green, red } = Colors;

export const Main = styled.div`
  margin: 0 50px 0 50px;
  font-size: 18px;
  font-family: "Roboto Mono";
  font-style: normal;
  background-color: transparent;

    @media (max-width: 768px) {
      margin: 0 25px 0 25px;
    }
`;

export const Body = styled.div`
  height: 68vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 15px 0 0;
`;

export const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 28px 28px 48px 0;
  width: 100%;
  color: ${navy};
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  list-style: none;
  line-height: 150%;
  width: 50vh;
  padding: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  height: 8vh;
  width: 100%;
  color: ${navy};
  padding: 25px 0 15px 0;
  margin-bottom: 25px;
`;

export const BottomLinks = styled.div`
  display: flex;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  padding-top: 25px;
  margin-top: 25px;
  font-family: "Roboto Mono";
  text-transform: uppercase;
  font-size: 14px;
`;

export const Nav = styled.div`
  padding: 0 15px 0 0;
`;
