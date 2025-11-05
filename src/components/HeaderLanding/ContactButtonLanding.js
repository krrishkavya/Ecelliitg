import React from "react";

function ContactButtonLanding() {
  return (
    <button
      style={{
        background: "linear-gradient(90deg, #6b3bff, #9b7bff)",
        border: "none",
        color: "white",
        fontWeight: "600",
        borderRadius: "999px",
        padding: "8px 20px",
        boxShadow: "0 0 10px rgba(107,59,255,0.3)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "13px",
        letterSpacing: "0.5px",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      CONTACT US
    </button>
  );
}

export default ContactButtonLanding;
