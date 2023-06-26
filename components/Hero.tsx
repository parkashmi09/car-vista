"use client";

import React from "react";
import CustomBtn from "./CustomBtn";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">Find book, or rent a car easily--</h1>
        <p>
          streamile your car rental expereince with you effortless booking
          process.
        </p>
        <CustomBtn
          title="Explore Cars"
          styles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
          <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
