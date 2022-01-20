import React from "react";
import { AboutFlex, List, SkillList, H2, H3 } from "../styles";

function About() {
  return (
    <div className="App">
      <div>
        <H2>
          Nice to e-meet you, my name is Yilla. I am a marketing manager turned
          motivated, forward-thinking Full Stack Engineer. I'm passionate about
          creating impactful intuitive applications and moderizing technology so
          it's accessible for everyone.
        </H2>
        <H3>
          I'm also a skin science nerd (I'm a licensed esthetician, too!), and
          love DIY home projects.
        </H3>
      </div>

      <H2>Contact</H2>
      <H3>Email</H3>
      <p>chn.yilla@gmail.com</p>
      <H3>Based in</H3>
      <p>Brooklyn, NY</p>

      <AboutFlex>
        <H2>Skills</H2>

        <SkillList>
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
        </SkillList>
      </AboutFlex>
    </div>
  );
}

export default About;
