import React from "react";
import IPage from "../interface/page";
import { AboutFlex, Column, List } from "../styles";

const About: React.FunctionComponent<IPage> = (props) => {
  return (
    <>
      <h2>
        <span style={{ fontStyle: "italic" }}>Nice to e-meet you!</span> My name
        is Yilla and I'm a motivated, forward-thinking{" "}
        <span style={{ fontStyle: "italic" }}>Full Stack Engineer</span>, born
        and raised in Brooklyn. I'm passionate about creating impactful
        intuitive applications and moderizing technology so it's accessible for
        everyone.
      </h2>
      <h3>
        Before coding, I was a Marketing Manager, focusing on skincare and SaaS.
        I also love skin science — I'm a licensed esthetician, too — and DIY
        home projects. Currently, I mentor{" "}
        <a href="https://fullstackacademy.com" target="_blank" rel="noreferrer">
          Fullstack Academy
        </a>{" "}
        students, focusing on the PERN stack and DS&A.
      </h3>

      <AboutFlex>
        <h2>Contact</h2>

        <Column>
          <List>
            <h3>Email</h3>
            <li>chn.yilla@gmail.com</li>
          </List>
          <List>
            <h3>Based in</h3>
            <li>Brooklyn, NY</li>
          </List>
        </Column>
      </AboutFlex>

      <AboutFlex>
        <h2>Skills</h2>

        <Column>
          <List>
            <h3>Proficient</h3>
            <li>HTML5 / CSS3</li>
            <li>Javascript</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Node.js / Express</li>
            <li>PostgreSQL / Sequelize.js</li>
            <li>Styled Components</li>
            <li>MaterialUI</li>
          </List>

          <List>
            <h3>Learning</h3>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Vue</li>
            <li>Python</li>
          </List>
        </Column>
      </AboutFlex>
    </>
  );
};

export default About;
