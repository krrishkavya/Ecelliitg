import React from "react";
import alums from "./data.jsx";
import AlumCard from "./AlumCard.jsx";
import "./styles.css";

const AlumList = () => {
  return (
    <div className="alum-list">
      <h1>OUR ALUMS</h1>
      <h4>No spotlight needed. The work said it all.</h4>
      <div className="alum-grid-wrapper">
        <div className="alum-grid">
          {alums.map((alum) => (
            <AlumCard
              key={alum.id}
              name={alum.name}
              image={alum.image}
              linkedin={alum.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumList;