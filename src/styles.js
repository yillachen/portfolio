import styled, { createGlobalStyle } from "styled-components";

import Basis from "./client/fonts/BasisGrotesque.woff";
import Basis2 from "./client/fonts/BasisGrotesque.woff2";
import RobotoMono from "./client/fonts/RobotoMono.woff";
import RobotoMono2 from "./client/fonts/RobotoMono.woff2";
import Tiempos from "./client/fonts/TiemposFine.woff";
import Tiempos2 from "./client/fonts/TiemposFine.woff2";
import TiemposItalic from "./client/fonts/TiemposFineItalic.woff";
import TiemposItalic2 from "./client/fonts/TiemposFineItalic.woff2";

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

const { navy } = Colors;

export const Main = styled.div`
  margin: 0 50px 0 50px;
  font-size: 18px;
  background-color: transparent;
  overflow: hidden;

  @media screen and (max-width: 820px) {
    margin: 0 50px 0 50px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    margin: 0 25px 0 25px;
    overflow: hidden;
  }
`;

export const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-evenly;
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
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
  margin-top: 0;
`;

export const Desc = styled.div`
  line-height: 150%;
  width: 75%;
  padding: 0;

  @media screen and (max-width: 820px) {
    width: 95%;
    overflow: hidden;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    overflow: hidden;
  }
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
  margin-bottom: 15px;

  @media screen and (max-width: 820px) {
    padding: 25px 0 25px 0;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0 10px 0;
    height: 10vH;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Body = styled.div`
  height: 77vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 15px 0 0;

  @media screen and (max-width: 820px) {
    height: 80vh;
  }

  @media screen and (max-width: 768px) {
    height: 80vh;
  }
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
  height: 8vh;
  padding: 15px 0 0 0;
  margin: 15px 0 0 0;
  font-family: "Roboto Mono", monospace;
  text-transform: uppercase;
  font-size: 14px;

  @media screen and (max-width: 820px) {
    width: 95%;
    height: 95%;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 95%;
    height: 95%;
    overflow: hidden;
    align-items: center;
  }
`;

export const Nav = styled.div`
  padding: 0 15px 0 0;

    @media screen and (max-width: 820px) {
      margin-top: 15px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 15px;
    }
`;

export const ProjList = styled.li`
  display: block;
  padding: 5px 8px 15px 8px;
`;

export const ProjFlex = styled.div`
  display: flex;
  padding: 25px;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding: 10px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;
