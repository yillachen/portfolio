import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import loader from "./loader.json";

export default function PageLoader() {
  return (
    <div style={{top: '50%'}}>
      <Player
        autoplay
        loop
        src={loader}
        style={{ height: "300px", width: "300px" }}
      >
      </Player>
    </div>
  );
}
