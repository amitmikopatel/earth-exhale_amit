"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Card from "./Card";

const plantData = [
  { name: "Aglaonema plant", image: "plant-1.png" },
  { name: "Plantain Lilies", image: "plant-2.png" },
  { name: "Cactus", image: "plant-3.png" }
];

const Heroplant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPlant = plantData[currentIndex];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? plantData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === plantData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative p-2 sm:p-6 md:p-8 lg:p-10">
      <Card className="w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-md lg:max-w-lg mx-auto relative">
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 text-white">
          <div className="-mt-38 md:-mt-35 lg:-mt-40 flex justify-center drop-shadow-hero-card">
            <Image
              src={`/${currentPlant.image}`}
              alt={currentPlant.name}
              width={600}
              height={600}
              className="h-auto w-80 sm:w-96 md:w-120 lg:w-150 drop-shadow-2xl transform scale-110 sm:scale-115 md:scale-120 lg:scale-125"
              priority
            />
          </div>
          <div className="w-full mt-0 sm:mt-5 md:mt-6 space-y-1 sm:space-y-2">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] opacity-50 font-normal">Indoor plant</h2>
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-medium">{currentPlant.name}</h1>
              {/* <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-60" /> */}
            </div>
            <div className="mt-6 sm:mt-8">
              <Button>Buy now</Button>
            </div>
          </div>
          <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-7 md:mt-8">
              {plantData.map((plant, index) => (
                <span
                  key={plant.name}
                  className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full
                  ${
                    currentIndex === index 
                    ? "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white"
                    : "bg-white/40"
                  }`}
                ></span>
              ))}
          </div>
        </div>
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 z-20 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Previous plant"
          >
            <ChevronLeft size={24}/>
          </button>
        )}

        {currentIndex < plantData.length -1 && (
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 z-20 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Next plant"
          >
            <ChevronRight size={24}/>
          </button>
        )}
      </Card>
    </div>
  );
};

export default Heroplant;