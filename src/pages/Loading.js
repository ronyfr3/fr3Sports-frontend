import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Handle.css";

// type: "Watch" | "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" |
//  "TailSpin" | "ThreeDots" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader"


const Loading = () => {
  return (
    <div className='loader'>
      <p>Loading...</p>
      <Loader
        type="Plane"
        color="#00BFFF"
        height={75}
        width={75}
        // timeout={3000}
      />
    </div>
  );
};

export default Loading;
