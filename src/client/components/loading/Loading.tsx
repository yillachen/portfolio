import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import swimming from './swimming.json'

export default function Loading() {
  return (
    <div style={{ marginTop: "25%"}}>
      <h3 style={{ textAlign: "center" }}>Loading...</h3>
      <Player
        autoplay
        loop
        src={swimming}
        style={{ height: '50vH' }}
      >
      </Player>
    </div>
  );
}
