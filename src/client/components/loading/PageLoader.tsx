import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import swimming from "./swimming.json";
import { Loader } from "../../../css/styles";

export default function PageLoader() {
  return (
    <Loader>
      <Player
        autoplay
        loop
        src={swimming}
        style={{ height: '25vH' }}
      ></Player>
    </Loader>
  );
}
