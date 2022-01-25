import styled, { createGlobalStyle } from "styled-components";
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
  font-family: 'Roboto Mono';
  font-style: normal;
`;

export const Body = styled.div`
  height: 70vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
  padding: 0 15px 0 0;
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
  align-items: center;
  flex-wrap: wrap;
  height: 10vh;
  width: 100%;
  color: ${navy};
  border-bottom: 1px solid ${lavender};
  padding-bottom: 25px;
  margin-bottom: 25px;
`;

export const BottomBar = styled.div`
  display: flex;
  height: 5vh;
  border-top: 1px solid ${lavender};
  padding-top: 25px;
  margin-top: 25px;
`;

export const AboutH2 = styled.h2`
  color: ${navy};
  font-weight: normal;
  font-style: italic;
  min-width: 300px;
  max-width: 25%;
`;

export const NavLink = styled.div`
  padding: 0 15px 0 0;
`;
