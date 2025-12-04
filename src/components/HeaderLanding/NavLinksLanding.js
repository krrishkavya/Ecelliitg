import React, { useState } from "react";

function NavLinksLanding() {
  const links = ["INITIATIVES", "ACHIEVEMENTS", "RESOURCES", "ABOUT US", "CONTACT US"];
  const [active, setActive] = useState("CONTACT US");

  return (
    <nav style={{ display: "flex", gap: "30px" }}> 
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase().replace(" ", "-")}`}
          onClick={() => setActive(link)}
          style={{
            color: active === link ? "#fff" : "rgba(255,255,255,0.75)", 
            background:
              active === link
                ? "linear-gradient(90deg, #6b3bff, #9b7bff)"
                : "transparent",
            textDecoration: "none",
            fontWeight: "400",
            fontSize: "12px", 
            letterSpacing: "0.8px",
            borderRadius: "999px",
            padding: "6px 15px",
            transition:
              "background 0.7s ease-in-out, color 0.4s ease-in-out, transform 0.2s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            if (active !== link) {
              e.target.style.color = "#9b7bff";
              e.target.style.transition = "color 0.4s ease-in-out";
            }
          }}
          onMouseLeave={(e) => {
            if (active !== link) {
              e.target.style.color = "rgba(255,255,255,0.75)";
              e.target.style.transition = "color 0.4s ease-in-out";
            }
          }}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavLinksLanding;
