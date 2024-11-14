import React from "react";
import HeroImage from "../../Assets/Images/hero.webp";

export default function HeroSection() {
  return (
    <>
      <div className="top-0 sticky">
        <img src={HeroImage} alt="" className="w-full object-cover" />
      </div>
    </>
  );
}
