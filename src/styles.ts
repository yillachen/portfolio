import styled, { createGlobalStyle } from "styled-components";
import {
  Basis,
  Basis2,
  Tiempos,
  Tiempos2,
  TiemposItalic,
  TiemposItalic2,
} from "./config/fonts.js";

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
  margin: 35px;
  font-size: 18px;
  background-color: transparent;
  overflow: hidden;

  @media screen and (max-width: 820px) {
    margin: 0 75px 25px 50px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    margin: 0 25px 0 25px;
    overflow: hidden;
  }
`;

export const Body = styled.div`
  border-top: 1px solid #4c47a0;
  padding-top: 15px;
  overflow: hidden;
`;

export const ProjectMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  justify-content: space-evenly;

  @media screen and (max-width: 820px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;
  color: #0f1433;
  height: 15vh;
  border-bottom: 1px solid #4c47a0;

  @media screen and (max-width: 820px) {
    overflow: hidden;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    height: 250px;
  }
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
  justify-content: space-between;
  width: 75%;

  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  line-height: 150%;
  width: 50vh;
  padding: 0;
  margin-top: 0;

  @media screen and (max-width: 820px) {
    width: 50vh;
  }

  @media (max-width: 768px) {
    width: 25vh;
  }
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
  padding: 15px 0 25px 0;

  @media screen and (max-width: 820px) {
    padding: 25px 0 25px 0;
    overflow: hidden;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0 10px 0;
    height: 10vh;
    justify-content: space-between;
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
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
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

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
