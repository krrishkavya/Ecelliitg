import React from "react";
import AchievementPage from "../src/Components/Achievements/AchievementsPage2";
import AchievementsHeaderLast from "../src/Components/Achievements/AchievementsHeaderLast";
import AchievementCarousel from "../src/Components/Achievements/AchievementCarousel";
import "../src/Components/Achievements/achievement.css";

export default function App() {
  return (
    <div>
      <AchievementPage/>
      <div className="achievements-container">
        <AchievementsHeaderLast />
        <AchievementCarousel />
      </div>
    </div>
    
  );
}

