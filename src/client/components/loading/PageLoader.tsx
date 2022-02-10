import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import swimming from "./swimming.json";
import { Loader } from "../../../styles";

export default function PageLoader() {
  return (
    <Loader>
      <Player
        autoplay
        loop
        src={swimming}
        style={{ height: '50vH' }}
      ></Player>
    </Loader>
  );
}
