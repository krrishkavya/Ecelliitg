import React from "react";

function Card({ quote, author, position }) {
  return (
    <div className={`achievements-card ${position}`}>
      <div className="achievements-card-quote">"{quote}"</div>
      <div className="achievements-card-author">{author}</div>
    </div>
  );
}

export default Card;