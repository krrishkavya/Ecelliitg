import React from "react";
import "./InitiativesLanding.css";

import img1 from "../../assets/udgam1.png";
// import img2 from "../assets/udgam2.png";
// import img3 from "../assets/udgam3.png";
// import img4 from "../assets/udgam4.png";
// import img5 from "../assets/udgam5.png";
// import img6 from "../assets/udgam6.png";

const initiativesData = [
  { id: 1, title: "UDGAM", imageUrl: img1 },
  { id: 3, title: "UDGAM", imageUrl: img1 },
  { id: 4, title: "UDGAM", imageUrl: img1 },
  { id: 2, title: "UDGAM", imageUrl: img1 },
  { id: 5, title: "UDGAM", imageUrl: img1 },
  { id: 6, title: "UDGAM", imageUrl: img1 },
];

const Card = ({ title, imageUrl }) => {
  return (
    <div className="initiative-card">
      <img src={imageUrl} alt={title} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <button className="card-button">KNOW MORE</button>
      </div>
    </div>
  );
};

const InitiativesLanding = () => {
  return (
    <section className="initiatives-section">
      <div className="initiatives-header">
        <h2>INITIATIVES</h2>
        <p className="subtitle">
          ESCAPING <span></span> THE <br /> WHITEBOARD
        </p>
      </div>

      <div className="initiatives-grid">
        {initiativesData.map((item) => (
          <Card key={item.id} title={item.title} imageUrl={item.imageUrl} />
        ))}
      </div>

      <button className="main-know-more-button">KNOW MORE</button>
    </section>
  );
};

export default InitiativesLanding;
