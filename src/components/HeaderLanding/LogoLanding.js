import React from "react";
import LogoImage from "../../assets/images/ecell-logo.png"; // adjust path

function LogoLanding() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src={LogoImage}
        alt="E-CELL Logo"
        style={{
          width: "40px",
          height: "40px",
          objectFit: "contain",
        }}
      />

      <div style={{ lineHeight: "1" }}>
        <div
          style={{
            fontWeight: "600", 
            fontSize: "14px",
            color: "rgba(255,255,255,0.75)", 
          }}
        >
          E-CELL
        </div>
        <div
          style={{
            fontWeight: "600", 
            fontSize: "12px",
            color: "rgba(255,255,255,0.75)", 
            letterSpacing: "0.5px",
          }}
        >
          IIT GUWAHATI
        </div>
      </div>
    </div>
  );
}

export default LogoLanding;
