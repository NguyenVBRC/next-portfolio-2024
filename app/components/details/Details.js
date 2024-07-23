"use client";

import React, { useState } from "react";
import Technology from "./Technology";
import Experience from "./Experience/Experience";

export default function Details() {
  const [isTechActive, setIsTechActive] = useState(true);
  const [isExpActive, setIsExpActive] = useState(false);

  let techBg = isTechActive ? "isActive" : "";
  let expBg = isExpActive ? "isActive" : "";

  const handleTechClick = () => {
    setIsTechActive(true);
    if (isExpActive) setIsExpActive(false);
  };

  const handleExpClick = () => {
    setIsExpActive(true);
    if (isTechActive) setIsTechActive(false);
  };

  return (
    <div className="details-container">
      <div className="details-bar">
        <p id={techBg} onClick={handleTechClick}>
          Technology
        </p>
        <p id={expBg} onClick={handleExpClick}>
          Experience
        </p>
      </div>
      {isTechActive ? <Technology /> : <Experience />}
    </div>
  );
}
