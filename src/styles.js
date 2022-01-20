import styled, { css } from "styled-components";

// Branded Colors
export const Colors = {
  lavender: "#E0DEFF",
  navy: "#0F1433",
  green: "#E5EF53",
  red: "#FF4724",
};

const { lavender, navy, green, red } = Colors;

export const Main = styled.div`
  margin: 50px 150px 50px 150px;
  font-size: 18px;
`;

export const AboutFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: ${navy};
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  color: ${navy};
`;

export const List = styled.ul`
  list-style: none;
  line-height: 150%;
  padding: 0 50px 0 0;
`;

export const H2 = styled.h2`
  color: ${navy};
  font-weight: normal;
  font-style: italic;
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: normal;
  color: ${red};
`;
