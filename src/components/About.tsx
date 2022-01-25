import React from "react";
import IPage from '../interface/page'
import { AboutFlex, Column, List, AboutH2 } from "../styles";

const About: React.FunctionComponent<IPage> = props => {
  return (
    <>
      <div>
        <h2>
          Nice to e-meet you! My name is Yilla and I'm a motivated, forward-thinking Full Stack Engineer, born and raised in Brooklyn.
          I'm passionate about creating impactful intuitive applications and moderizing technology so it's accessible for everyone.
        </h2>
        <h3>
          Before coding, I was a Marketing Manager, focusing on skincare and SaaS. I'm also a skin science nerd (I'm a licensed esthetician, too!), and
          love DIY home projects.
        </h3>
      </div>

      <AboutFlex>
        <AboutH2>Contact</AboutH2>

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
        <AboutH2>Skills</AboutH2>

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
}

export default About;
