import React from "react";
import IPage from "../../../interface/page";
import { ProjectMain } from "../../../styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../../config/transition";
import { Controller, Scene } from "react-scrollmagic";
import mesh from "../../images/mesh.gif";
import { Timeline, Tween } from "react-gsap";

const Mesh: React.FunctionComponent<IPage> = (props) => {
  return (
    <motion.div
      animate="in"
      initial="out"
      exit="out"
      variants={fadeVariant}
      transition={fadeTransition}
    >
      <ProjectMain>
        <h2>Mesh</h2>
        <img src={mesh} alt="Mesh" style={{ width: "50%", height: "50%" }} />
      </ProjectMain>
      <Controller>
        <div>
          <Scene
            duration={400}
            pin={{ pushFollowers: true }}
            triggerHook={0.5}
            offset={125}
          >
            <div>
              <h3>
                Mesh is a personal safety app that helps you find the safest
                path to your destination, plus automatically alerts your friends
                if anything unexpected happens during your trip.
              </h3>
              <h2>Start editing to see change the magic</h2>
            </div>
          </Scene>
          <h2>Outside the scene</h2>
          <br />
          <Scene
            duration={300}
            triggerHook={0.75}
            pin={{ pushFollowers: false }}
          >
            {(progress: number | undefined) => (
              <div className="mx-auto">
                <Timeline totalProgress={progress} paused>
                  <Timeline
                    target={<p className="timeline">Watch me appear!</p>}
                  >
                    <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                  </Timeline>
                  <Timeline
                    target={
                      <p className="timeline">
                        Watch me move! and then disappear!
                      </p>
                    }
                  >
                    <Tween from={{ x: -1000 }} to={{ x: 250 }} />
                    <Tween from={{ opacity: 1 }} to={{ opacity: -1 }} />
                  </Timeline>
                </Timeline>
              </div>
            )}
          </Scene>
        </div>
        <h1> Bye! </h1>
      </Controller>
      {/* <ProjectMain>
        <h2>Mesh</h2>
        <Controller>
          <Scene
            duration={400}
            pin={{ pushFollowers: false }}
            triggerHook={1}
            offset={125}
          >
            <h2>
              Mesh is a personal safety app that helps you find the safest path
              to your destination, plus automatically alerts your friends if
              anything unexpected happens during your trip.
            </h2>

            <div>
              <ul>
                <li>
                  Plan your safest routes around town with a crime-density heat
                  map that uses over 300,000 reported incidents via the NYC
                  public database.
                </li>
                <li>
                  Create trusted groups of contacts, called Safety Nets, who
                  receive your notifications and SOS signals.
                </li>
                <li>
                  Send automatic messages to your Safety Nets when you get home,
                  reach safe-points in your journey, or if something goes wrong.
                </li>
                <li>
                  Contribute to Mesh's safety data by filing your own incident
                  reports.
                </li>
              </ul>
            </div>
          </Scene>
        </Controller>
      </ProjectMain> */}
    </motion.div>
  );
};

export default Mesh;
