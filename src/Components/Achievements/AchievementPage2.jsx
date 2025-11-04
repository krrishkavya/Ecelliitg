import React from "react";
import "../styles/achievementPage.css";

function AchievementPage() {
  const awards = [
    {
      title: "Funding through Disrupt",
      description:
        "Edlytics, a HQ Alumni start-up, which provides data driven insights to Universities, judges of District 4, selected batchas conducted an ICO launched Summer of students at IIT Guwahati's",
      image: "img/oscar.png",
    },
    {
      title: "Funding through Disrupt",
      description:
        "Edlytics, a HQ Alumni start-up, which provides data driven insights to Universities, judges of District 4, selected batchas conducted an ICO launched Summer of students at IIT Guwahati's",
      image: "img/oscar.png",
    },
    {
      title: "Funding through Disrupt",
      description:
        "Edlytics, a HQ Alumni start-up, which provides data driven insights to Universities, judges of District 4, selected batchas conducted an ICO launched Summer of students at IIT Guwahati's",
      image: "img/oscar.png",
    },
    {
      title: "GEB",
      description:
        "The E-Cell IIT-G alumni Devmak Senapati's batchas Easyship, got selected for the Global Entrepreneurship Bootcamp, which was held in Kuala Lumpur, Malaysia.",
      image: "img/oscar.png",
    },
    {
      title: "Flyzy",
      description:
        "Two E-Cell IIT-G alumni Devmak Myatra and Harende Patel, got selected for the Global Entrepreneurship Bootcamp, which was held in Kuala Lumpur, Malaysia.",
      image: "img/oscar.png",
    },
    {
      title: "Fourth Award",
      description:
        "Another achievement showcasing excellence and innovation in the entrepreneurship ecosystem. Continuing the legacy of success.",
      image: "img/oscar.png",
    },
    {
      title: "Flyzy",
      description:
        "Two E-Cell IIT-G alumni Devmak Myatra and Harende Patel, got selected for the Global Entrepreneurship Bootcamp, which was held in Kuala Lumpur, Malaysia.",
      image: "img/oscar.png",
    },
  ];

  return React.createElement(
    "div",
    { className: "achievement-container2" },
    React.createElement(
      "div",
      { className: "achievementscroll-container" },
      awards.map((award, i) =>
        React.createElement(
          "div",
          { className: "achievementcard", key: i },
          React.createElement(
            "div",
            { className: "achievementcard-image" },
            React.createElement("img", {
              src: award.image,
              alt: award.title,
            })
          ),
          React.createElement(
            "div",
            { className: "achievementcard-content" },
            React.createElement("div", { className: "achievementcard-title" }, award.title),
            React.createElement(
              "div",
              { className: "achievementcard-description" },
              award.description
            )
          )
        )
      )
    )
  );
}

export default AchievementPage;
