import React from "react";
import IPage from "../../../interface/page";
import { ProjList, ProjFlex } from "../../../css/styles";
import hearth1 from "../../images/hearth-1.png";
import hearth2 from "../../images/hearth-2.png";

const HearthContent: React.FunctionComponent<IPage> = (props) => {
  return (
    <>
      <h1>Hearth</h1>
      <div>
        <div className="heroProj">
          <div>
            <h3>Hearth is a full-stack e-commerce application</h3>{" "}
            <p>
              built with React, Redux, Node.js, Express.js, and PostgreSQL and
              deployed on Heroku. We used MaterialUI and pure CSS to style the
              website. This mock online boutique offers curated furniture
              collections targeted to busy people who want to create a home, but
              don't know where to start.
            </p>
            <br />
            <img
              alt="React"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              className="techIcon"
            />
            <img
              alt="Redux"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              className="techIcon"
            />
            <img
              alt="Node.js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
              className="techIcon"
            />
            <img
              alt="Express.js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              className="techIcon"
            />
            <img
              alt="PostgreSQL"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
              className="techIcon"
            />
            <img
              alt="MaterialUI"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              className="techIcon"
            />
            <img
              alt="CSS3"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              className="techIcon"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="project-box">
          <img className="active" src={hearth1} alt="Hearth" />
          <img className="active" src={hearth2} alt="Hearth" />
        </div>
        <div className="mx-auto">
          <h3>Key Features Implemented</h3>
          <ProjFlex>
            <ProjList>
              Authenticated sign up and login components built with MaterialUI,
              fortified with JWT & bcrypt to hash user information.
            </ProjList>
            <ProjList>
              Fully customized user and guest checkout experiences using
              Express.js & window.localStorage.
            </ProjList>
            <ProjList>
              Admin accounts have special permissions to create, edit, or delete
              products and user accounts.
            </ProjList>
          </ProjFlex>
        </div>
      </div>
      <div className="view-box">
        <div style={{ display: "flex", flexDirection: "column" }}>
          View the code on
          <br />
          <br />
          <a
            href="https://github.com/04-gs-2109-no-signal-i-wep/hearth"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              alt=""
              className="techIcon"
            />
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          View the website on
          <br />
          <br />
          <a
            href="http://grace-shopper-hearth.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
              alt=""
              className="techIcon"
            />
          </a>
        </div>
      </div>

    </>
  );
};

export default HearthContent;
