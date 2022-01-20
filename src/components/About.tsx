import React from "react";
import { AboutFlex, Column, List, H2, AboutH2, H3 } from "../styles";

function About() {
  return (
    <>
      <div>
        <H2>
          Nice to e-meet you! My name is Yilla and I'm a motivated, forward-thinking Full Stack Engineer, born and raised in Brooklyn.
          I'm passionate about creating impactful intuitive applications and moderizing technology so it's accessible for everyone.
        </H2>
        <H3>
          Before coding, I was a Marketing Manager, focusing on skincare and SaaS. I'm also a skin science nerd (I'm a licensed esthetician, too!), and
          love DIY home projects.
        </H3>
      </div>

      <AboutFlex>
        <AboutH2>Contact</AboutH2>

        <Column>
          <List>
            <H3>Email</H3>
            <li>chn.yilla@gmail.com</li>
          </List>
          <List>
            <H3>Based in</H3>
            <li>Brooklyn, NY</li>
          </List>
        </Column>
      </AboutFlex>

      <AboutFlex>
        <AboutH2>Skills</AboutH2>

        <Column>
          <List>
            <H3>Proficient</H3>
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
            <H3>Learning</H3>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Vue</li>
            <li>Python</li>
          </List>
        </Column>
      </AboutFlex>
    </>
  );
}

export default About;
