import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import swimming from './swimming.json'

export default function PageLoader() {
  return (
    <div style={{marginTop: '10%'}}>
      <Player
        autoplay
        loop
        src={swimming}
        style={{ height: "300px", width: "300px" }}
      >
      </Player>
    </div>
  );
}
