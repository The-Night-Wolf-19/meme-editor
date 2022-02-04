import React from "react";
import "./NavBar.css";
import * as logo from "../../asset/smile.json";
import Lottie from "react-lottie";
const NavBar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };
  return (
    <div className="navigation">
      <div>
        <Lottie options={defaultOptions} height={40} />
      </div>
      <span className="name">Meme Editor</span>
    </div>
  );
};

export default NavBar;
