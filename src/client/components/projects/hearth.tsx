import React, { useState, useEffect } from "react";
import IPage from "../../../interface/page";
import { ProjList, ProjFlex } from "../../../styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";
import hearth1 from "../../images/hearth-1.png";
import hearth2 from "../../images/hearth-2.png";
import PageLoader from "../loading/PageLoader";

const Hearth: React.FunctionComponent<IPage> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => setLoading(false), 2600);
    };
    delay();
    return () => console.log("Unmounting...");
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
      style={{ textAlign: "center" }}
    >
      <h1>Hearth</h1>
      <Controller>
        <div>
          <Scene
            duration={200}
            pin={{ pushFollowers: false }}
            triggerHook={0.5}
            offset={125}
          >
            <div className="heroProj">
              <div>
                <h3>
                  Hearth is an full-stack e-commerce application built with
                  React, Redux, Node.js, Express.js, and PostgreSQL and deployed
                  on Heroku. We used MaterialUI and pure CSS to style the
                  website. This mock shopping website offers curated furniture
                  collections targeted to busy people who want to create a home,
                  but don't know where to start.
                </h3>
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
          </Scene>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            <img className="heroImg" src={hearth1} alt="Hearth" />
            <img className="heroImg" src={hearth2} alt="Hearth" />
          </div>
          <br />
          <br />
          <Scene
            duration={300}
            triggerHook={0.25}
            pin={{ pushFollowers: true }}
          >
            {(progress: number | undefined) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={
                      <>
                        <h3>Key Features Implemented</h3>
                        <ProjFlex>
                          <ProjList>
                            Authenticated sign up and login components built
                            with MaterialUI and fortified with JWT and bcrypt to
                            protect user passwords and information.
                          </ProjList>
                          <ProjList>
                            Fully customized user and guest checkout experiences
                            using Express and window.localStorage.
                          </ProjList>
                          <ProjList>
                            Admin accounts have access to all users in the
                            website database and can create, edit, or delete
                            products.
                          </ProjList>
                        </ProjFlex>
                      </>
                    }
                  >
                    <Tween from={{ x: -1200 }} to={{ x: 0 }} />
                  </Timeline>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
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
        <br />
        <br />
      </Controller>
    </motion.div>
  );
};

export default Hearth;
