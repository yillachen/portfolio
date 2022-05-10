import styled, { createGlobalStyle } from "styled-components";
import {
  Basis,
  Basis2,
  Tiempos,
  Tiempos2,
  TiemposItalic,
  TiemposItalic2,
} from "../config/fonts.js";

export default createGlobalStyle`
  @font-face {
    font-family: 'Tiempos Fine';
    src: local('Tiempos Fine'), local('Tiempos Fine'),
    url(${Tiempos2}) format('woff2'),
    url(${Tiempos}) format('woff');
    font-style: normal;
    font-weight: 300;
  };
  @font-face {
    font-family: 'Tiempos Fine';
    src: local('Tiempos Fine'), local('Tiempos Fine'),
    url(${TiemposItalic2}) format('woff2'),
    url(${TiemposItalic}) format('woff');
    font-style: italic;
  };
  @font-face {
    font-family: 'Basis Grotesque';
    src: local('Basis Grotesque'), local('Basis Grotesque'),
    url(${Basis2}) format('woff2'),
    url(${Basis}) format('woff');
    font-style: normal;
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
  margin: 0 10px 0 10px;
  font-size: 18px;
  background-color: transparent;
  overflow-x: hidden;

  @media (min-width: 768px) {
    margin: 35px;
  }

  @media screen and (min-width: 820px) {
    margin: 0 75px 25px 50px;
  }
`;

export const Body = styled.div`
  background-color: transparent;
  border-top: 1px solid #4c47a0;
  border-bottom: 1px solid #4c47a0;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 15px 0 15px 0;

  @media (min-width: 768px) {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 72vh;
  }
`;

export const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-evenly;
  margin: 0;
`;

export const Project = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  color: #0f1433;
  height: 20vh;
  border-top: 1px solid #4c47a0;

  overflow: hidden;
  justify-content: center;
  height: 200px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 10px 25px 48px 0;
  width: 100%;
  color: ${navy};
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 820px) {
    width: 75%;
  }
`;

export const List = styled.ul`
  list-style: none;
  line-height: 150%;
  width: 18vh;
  padding: 0;
  margin-top: 0;

  @media (min-width: 768px) {
    width: 50vh;
  }
`;

export const Desc = styled.div`
  line-height: 150%;
  width: 95%;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 75%;
    overflow: hidden;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  width: 100%;
  color: ${navy};
  padding: 20px 0 25px 0;
  height: 8vh;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 15px 0 25px 0;
    height: 8vh;
    overflow: hidden;
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
  padding: 10px 2px 0 2px;
  font-family: "Roboto Mono", monospace;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Nav = styled.div`
  padding: 0 15px 0 0;
`;

export const ProjList = styled.li`
  display: block;
  padding: 5px 8px 15px 8px;
  width: 100%;

  @media screen and (min-width: 820px) {
    width: 33%;
  }
`;

export const ProjFlex = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    padding: 25px;
    flex-wrap: nowrap;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
