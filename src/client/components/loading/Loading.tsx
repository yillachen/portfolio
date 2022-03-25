import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import swimming from './swimming.json'
import { Loader } from "../../../css/styles";

export default function Loading() {
  return (
    <Loader style={{height: '100vH'}}>
      <Player
        autoplay
        loop
        src={swimming}
        style={{ height: '50vH' }}
      >
      </Player>
    </Loader>
  );
}
