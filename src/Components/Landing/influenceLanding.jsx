import React from "react";
import { motion } from "framer-motion";

import "./influenceLanding.css";
import InfluenceLanding from "../Components/Landing/influenceLanding";

// Inside the Landing function’s return:
<>
  {/* other existing sections */}
  <InfluenceLanding />
</>

const InfluenceLanding = () => {
  const titans = Array(12).fill("/images/titan-placeholder.png"); // replace with your real image paths
  const sponsors = Array(8).fill("/images/ctrls-logo.png");

  return (
    <section className="influence-wrapper">
      <div className="influence-header">
        <h2>
          The <span className="highlight">Titans Who</span> Lit <br /> Up Our Events
        </h2>
      </div>

     <div className="titans-grid">
  {titans.map((img, index) => (
    <motion.div
      className="titan-card"
      key={index}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <img src={img} alt={`Titan ${index + 1}`} />
    </motion.div>
  ))}
</div>

      <p className="and-more">and many more...</p>

      <div className="sponsor-section">
        <h3 className="sponsor-title">
          CATALYSTS OF OUR <br /> <span className="highlight">MOVEMENT</span>
        </h3>
        <p className="thanks-text">– Thanks to our Sponsors –</p>

        <div className="sponsor-grid">
          {sponsors.map((logo, index) => (
            <div className="sponsor-card" key={index}>
              <img src={logo} alt="Sponsor Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfluenceLanding;

