"use client";
import React, { useEffect, useState } from "react";
import MoonPhase from "./MoonPhase";
import "./sunmoon.css";
import { getMoonPhase } from "./getMoonPhase";

export default function SunMoon() {
  const [animatedPhase, setAnimatedPhase] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(getMoonPhase());

  // 10-second loop through 1 lunar month
  useEffect(() => {
    const totalDurationMs = 30000;
    const intervalMs = 50;
    const step = intervalMs / totalDurationMs;

    const timer = setInterval(() => {
      setAnimatedPhase((prev) => (prev + step) % 1);
    }, intervalMs);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="footer-container">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="moon-container">
          <MoonPhase phase={animatedPhase} size={80} />
        </div>
      </div>
    </>
  );
}
