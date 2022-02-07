import React from "react";
import Lottie from "react-lottie";
import loader from "./loader.json";

export default function PageLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} style={{width: 400, height: 400}} />
    </div>
  );
}
