import React from "react";
import "./Header.css";
import HeaderNavigation from "./Header-Navigation/HeaderNavigation";
import HeaderMain from "./Header-Main/HeaderMain";
import videoBg from "../media/BrbBackground.mp4";
const Header = () => {
  return (
    <section id="Header">
      <HeaderNavigation />
      <HeaderMain />
      <div id="BackGroundBG">
        <video src={videoBg} autoPlay loop muted playsInline></video>
      </div>
      <div id="Header-overlay"></div>
    </section>
  );
};
export default Header;
