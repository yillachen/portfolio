import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import wave from "./wave.json";

export default function Loading() {
  return (
    <div style={{ marginTop: "8%", marginLeft: '-10px'}}>
      <h3 style={{ textAlign: "center" }}>Loading...</h3>
      <Player
        autoplay
        loop
        src={wave}
        style={{ height: '65vH' }}
      >
      </Player>
      <h3 style={{ textAlign: "center", fontSize: 12 }}>(Currently best viewed on Desktop)</h3>
    </div>
  );
}
