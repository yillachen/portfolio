import React from "react";
import Lottie from "react-lottie";
import wave from "./wave.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wave,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{marginTop: '15%'}}>
      <h3 style={{textAlign: 'center'}}>Loading...</h3>
      <Lottie options={defaultOptions} style={{ height: '50vH' }} />
    </div>
  );
}
