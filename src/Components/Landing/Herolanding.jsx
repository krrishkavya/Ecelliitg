import React from "react";
import "./herolanding.css";
import hero1 from "../../assets/Image1.jpg";
import hero2 from "../../assets/Image2.jpg";
import hero3 from "../../assets/Image3.jpg";
import hero4 from "../../assets/Group 263.jpg";
import grd1 from "../../assets/Rectangle 230.png";
import grd2 from "../../assets/Rectangle 231.png";
import grd3 from "../../assets/Rectangle 231.png";
import grd4 from "../../assets/Rectangle 231.png";

const HeroLanding = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
         
        <div className=" Mesh1" />
        <div className=" Mesh2"/>
        <div className=" Mesh3"/>
        <div className=" Mesh4" />
        <div className=" Mesh5" />
        <div className=" Mesh6" />
        <div className=" Mesh7" />
        <div className=" Mesh8" />
        <div className=" Mesh9" />
        <div className=" Mesh10" />
        <div className=" Mesh11" />
        <div className=" Mesh12" />
        <div className=" Mesh13"/>
        <div className=" Mesh14" />
        <div className=" Mesh15" />
        <div className=" Mesh16" />
       
        <div className="hero-text">
          
        
          <p className="hero-subtitle">
            A space where ideas take shape and ambition finds direction. Built for
            students, founders, and anyone chasing what’s next.
          </p>
          <h1 className="hero-title">
            EMPOWERING <br />
            THE NEXT WAVE OF <br />
            <span>ENTREPRENEURS</span>
          </h1>
        </div>
         <div className="triangles">
         <img src={grd1} alt="Triangle 1" className="tri1" />
         <img src={grd2} alt="Triangle 2" className="tri2" />
         <img src={grd3} alt="Triangle 3" className="tri3" />
         <img src={grd4} alt="Triangle 4" className="tri4" />
         </div>
         <div className="hero-images">
        <img src={hero1} alt="Hero 1" className="hero-img " />
        <img src={hero2} alt="Hero 2" className="hero-img " />
        <img src={hero3} alt="Hero 3" className="hero-img " />
        <img src={hero4} alt="Hero 4" className="hero-img img4" />
        </div>

          </div>
    </section>
  );
};

export default HeroLanding;
