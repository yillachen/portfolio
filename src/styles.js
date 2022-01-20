import styled from "styled-components";

// Branded Colors
export const Colors = {
  lavender: "#E0DEFF",
  navy: "#0F1433",
  green: "#E5EF53",
  red: "#FF4724",
};

const { lavender, navy, green, red } = Colors;

export const Main = styled.div`
  margin: 50px;
  font-size: 18px;
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 28px 28px 48px 0;
  width: 100%;
  color: ${navy};
`;

export const Column = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const List = styled.ul`
  list-style: none;
  line-height: 150%;
  width: 350px;;
  padding: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 10vH;
  width: 100%;
  color: ${navy};
  border-bottom: 1px solid ${lavender};
  padding-bottom: 25px;
  margin-bottom: 25px;
`;

export const H2 = styled.h2`
  color: ${navy};
  font-weight: normal;
  font-style: italic;
`;

export const AboutH2 = styled.h2`
  color: ${navy};
  font-weight: normal;
  font-style: italic;
  min-width: 300px;
  max-width: 25%;
`;

export const H1 = styled.h1`
  font-size: 42px;
  font-weight: normal;
  color: ${navy};
`;


export const H3 = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: normal;
  color: ${red};
`;
