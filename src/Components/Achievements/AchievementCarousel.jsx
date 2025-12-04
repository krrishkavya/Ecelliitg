import React, { useState, useEffect } from "react";
import Card from "./AchievementsCard";
import "./achievementCarousel.css";

const cardsData = [
  {
    quote:
      "Being part of E-Cell IITG was a turning point for me. The mentorship sessions and startup bootcamps not only sharpened my entrepreneurial mindset but also gave me the confidence to pitch my idea in front of investors. The network and energy here are unmatched!",
    author: "Riya Sharma, Founder of NovaTech",
  },
  {
    quote:
      "The innovation challenges and workshops at E-Cell helped me transform my concept into a viable business. The support from mentors and fellow entrepreneurs created an ecosystem where ideas truly flourish.",
    author: "Arjun Patel, CEO of TechVenture",
  },
  {
    quote:
      "E-Cell IITG provided me with the resources and connections I needed to launch my startup. The hands-on experience and real-world insights from industry experts were invaluable in shaping my entrepreneurial journey.",
    author: "Priya Menon, Co-founder of InnovateLab",
  },
  {
    quote:
      "From ideation to execution, E-Cell has been instrumental in every step of my startup journey. The community here is incredibly supportive, and the learning opportunities are endless.",
    author: "Vikram Singh, Founder of StartUp Hub",
  },
  {
    quote:
      "From ideation , E-Cell has been instrumental in every step of my startup journey. The community here is incredibly supportive, and the learning opportunities are endless.",
    author: "John Singh, Founder of StartUp Hub",
  },
];

function AchievementCarousel() {
  const [current, setCurrent] = useState(0);
  const total = cardsData.length;

  const nextCard = () => setCurrent((current + 1) % total);
  const prevCard = () => setCurrent((current - 1 + total) % total);

  const getPosition = (index) => {
    const pos = (index - current + total) % total;
    if (pos === 0) return "center";
    if (pos === 1) return "right";
    if (pos === total - 1) return "left";
    return "hidden";
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextCard();
      if (e.key === "ArrowLeft") prevCard();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [current]);

  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? nextCard() : prevCard();
    };
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchend", onTouchEnd);
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [current]);

  return (
    <div className="achievements-carousel-wrapper">
      <button className="achievements-arrow achievements-arr1" onClick={prevCard} aria-label="Previous testimonial">
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <div className="achievements-card-viewport">
        <div className="achievements-card-container">
          {cardsData.map((c, i) => (
            <Card key={i} quote={c.quote} author={c.author} position={getPosition(i)} />
          ))}
        </div>
      </div>

      <button className="achievements-arrow achievements-arr2" onClick={nextCard} aria-label="Next testimonial">
        <svg viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
}

export default AchievementCarousel;

