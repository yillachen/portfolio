import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import wave from "./wave.json";

export default function Loading() {
  return (
    <div style={{ marginTop: "10%" }}>
      <h3 style={{ textAlign: "center" }}>Loading...</h3>
      <Player
        autoplay
        loop
        src={wave}
        style={{ height: '75vH' }}
      >
      </Player>
    </div>
  );
}
