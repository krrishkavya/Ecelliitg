import React from "react";
import "./HeaderLanding.css";
import LogoLanding from "./LogoLanding";
import NavLinksLanding from "./NavLinksLanding";

function HeaderLanding() {
  return (
    <header className="header-landing">
      <div className="header-left">
        <LogoLanding />
      </div>

      <div className="header-right">
        <NavLinksLanding /> 
      </div>
    </header>
  );
}

export default HeaderLanding;
