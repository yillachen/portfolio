import React from "react";
import IPage from "../../interface/page";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ProjectMain } from "../../styles";
import { motion } from "framer-motion";
import { fadeTransition, fadeVariant } from "../../config/transition";

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
        <h2>
          Mesh is a personal safety app that helps you find the safest path to
          your destination, plus automatically alerts your friends if anything
          unexpected happens during your trip.
        </h2>
        <ul>
          <li>
            Plan your safest routes around town with a crime-density heat map
            that uses over 300,000 reported incidents via the NYC public
            database.
          </li>
          <li>
            Create trusted groups of contacts, called Safety Nets, who receive
            your notifications and SOS signals.
          </li>
          <li>
            Send automatic messages to your Safety Nets when you get home, reach
            safe-points in your journey, or if something goes wrong.
          </li>
          <li>
            Contribute to Mesh's safety data by filing your own incident
            reports.
          </li>
        </ul>
        <AnimationOnScroll animateIn="fadeIn" delay={800}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
            erat velit scelerisque in. Molestie ac feugiat sed lectus
            vestibulum. Sagittis aliquam malesuada bibendum arcu vitae elementum
            curabitur vitae. Sed ullamcorper morbi tincidunt ornare massa.
            Tellus molestie nunc non blandit massa enim nec dui. Libero nunc
            consequat interdum varius sit amet mattis vulputate enim. Amet est
            placerat in egestas erat. Id consectetur purus ut faucibus pulvinar
            elementum. Non quam lacus suspendisse faucibus interdum posuere
            lorem. Faucibus ornare suspendisse sed nisi. Et molestie ac feugiat
            sed lectus vestibulum. Ac felis donec et odio pellentesque diam
            volutpat commodo sed. Cursus vitae congue mauris rhoncus aenean vel
            elit. Sed id semper risus in hendrerit gravida. Pharetra diam sit
            amet nisl suscipit adipiscing bibendum est ultricies. Nulla pharetra
            diam sit amet nisl suscipit adipiscing bibendum est. Magna eget est
            lorem ipsum dolor sit amet. Turpis massa tincidunt dui ut ornare
            lectus sit amet est. Amet facilisis magna etiam tempor orci eu
            lobortis elementum. Dolor sit amet consectetur adipiscing elit
            pellentesque habitant morbi tristique. Ac turpis egestas integer
            eget aliquet nibh praesent tristique. Ornare quam viverra orci
            sagittis. Sed id semper risus in hendrerit gravida. Euismod quis
            viverra nibh cras pulvinar. Eleifend mi in nulla posuere
            sollicitudin. Consectetur adipiscing elit pellentesque habitant
            morbi tristique senectus et. Proin fermentum leo vel orci porta non
            pulvinar. Id cursus metus aliquam eleifend mi in nulla posuere
            sollicitudin. Sem et tortor consequat id porta. Dui sapien eget mi
            proin sed libero enim sed. Diam donec adipiscing tristique risus nec
            feugiat in. Et ligula ullamcorper malesuada proin. Dolor morbi non
            arcu risus quis. Eget felis eget nunc lobortis mattis aliquam
            faucibus purus in. Lectus urna duis convallis convallis tellus id
            interdum velit laoreet. Suspendisse interdum consectetur libero id
            faucibus nisl tincidunt eget nullam. Quis varius quam quisque id
            diam. Fames ac turpis egestas sed tempus urna et pharetra pharetra.
            Porta nibh venenatis cras sed. Tincidunt id aliquet risus feugiat.
            Leo in vitae turpis massa sed. Maecenas volutpat blandit aliquam
            etiam erat velit scelerisque in dictum. Ac felis donec et odio
            pellentesque diam volutpat commodo sed. In tellus integer feugiat
            scelerisque varius morbi enim nunc. Proin libero nunc consequat
            interdum varius. Sodales ut eu sem integer. Nibh ipsum consequat
            nisl vel. Quis vel eros donec ac odio tempor. Porta lorem mollis
            aliquam ut porttitor leo a diam sollicitudin. Nam aliquam sem et
            tortor consequat id. Sed turpis tincidunt id aliquet. Arcu cursus
            vitae congue mauris rhoncus aenean. Ipsum dolor sit amet consectetur
            adipiscing elit. Pellentesque diam volutpat commodo sed egestas
            egestas. Placerat duis ultricies lacus sed turpis tincidunt id
            aliquet. Accumsan lacus vel facilisis volutpat est velit. Massa enim
            nec dui nunc mattis enim. Amet consectetur adipiscing elit
            pellentesque. A iaculis at erat pellentesque adipiscing commodo elit
            at. Mi in nulla posuere sollicitudin aliquam ultrices. Aliquam sem
            et tortor consequat id porta nibh. Mattis pellentesque id nibh
            tortor id. Et tortor consequat id porta nibh venenatis cras. A
            condimentum vitae sapien pellentesque habitant morbi tristique
            senectus et.
          </p>
        </AnimationOnScroll>
      </ProjectMain>
    </motion.div>
  );
};

export default Mesh;
