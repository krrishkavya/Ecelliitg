import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./OurAlums.css";

const AlumCard = ({ name, image, linkedin }) => {
  return (
    <div className="alum-card">
      <img src={image} alt={name} className="alum-image" />
      <div className="alum-info">
        <h3 className="alum-name">{name}</h3>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={28} color="black" />
        </a>
      </div>
    </div>
  );
};

export default AlumCard;