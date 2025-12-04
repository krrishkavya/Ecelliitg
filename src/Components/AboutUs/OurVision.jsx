import React from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Rocket} from "../../assets/rocket.svg";
import { ReactComponent as Globe } from "../../assets/globe.svg";
import { ReactComponent as Group } from "../../assets/group.svg";
import { ReactComponent as Bullet } from "../../assets/bullet.svg";


import "./our_vision.css";

export default function OurVision() {
  const Connector = () => (
    <div className="connector-group">
      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="52" viewBox="0 0 1 52" fill="none">
        <path d="M0.5 0V51.5" stroke="#676767" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="1" height="52" viewBox="0 0 1 52" fill="none">
        <path d="M0.5 0V51.5" stroke="#676767" />
      </svg>
    </div>
  );

  return (
    <div className="vision-section">
      <h1 className="vision-title">OUR VISION</h1>

      <div className="vision-flow">
        <div className="vision-box first-box">
          <p>
            At E-Cell, IIT Guwahati, we believe this rapidly evolving era is the
            ideal time to step up and shape the future.
          </p>
          <div className="star-icon" aria-hidden>
            <Star size={20} />
          </div>
        </div>

        <Connector />

        <div className="vision-box second-box">
          <p>
            We see the world as our playground—full of opportunities waiting to
            be explored.
          </p>
          <div className="rocket-icon" aria-hidden>
            <Rocket size={20} />
          </div>
        </div>

        <Connector />

        <div className="vision-box third-box">
          <p>
            Our vision is to foster a strong spirit of entrepreneurship within
            the IITG community and across the youth of North-East India.
          </p>
          <div className="group-icon" aria-hidden>
            <Group size={20} />
          </div>
        </div>

        <div className="spacing-74"></div>

        <div className="vision-box fourth-box">
          <div className="bullet-icon">
            <Bullet size ={20}/>
          </div>
          <p className="to-achieve-text">
            <p>To achieve this, we:</p>
          </p>
          <ul>
            <li>Host a wide range of initiatives and events.</li>
            <li>Offer a comprehensive and hands-on learning experience.</li>
            <li>
              Inspire individuals to break free from the mundane and pursue
              impactful ventures.
            </li>
          </ul>

          <div className="globe-icon" aria-hidden>
            <Globe size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
