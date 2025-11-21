"use client";
import React, { useState } from "react";
import O2SectionTitle from "./UI/O2SectionTitle";
import Button from "./UI/Button";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
const plantImages = [
  "/o2plant1.png",
  "/o2plant2.png",
  "/o2plant3.png",
  "/o2plant4.png",
];

const O2Section = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftClicked, setLeftClicked] = useState(false);
  const [rightClicked, setRightClicked] = useState(false);

  const leftArrow = () => {
    goToPrev();
    setLeftClicked(true);
    setRightClicked(false);
  }

  const rightArrow = () => {
    goToNext();
    setLeftClicked(false);
    setRightClicked(true);
  }
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev === plantImages.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? plantImages.length - 1 : prev - 1));
  };
  return (
    <>
      <section className="min-h-screen px-4 sm:px-8 lg:px-20   text-white ">
        <div className="flex justify-center -mt-10 mb-30">
          <O2SectionTitle>Our Best o2</O2SectionTitle>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row bg-white/5 border border-white/33 backdrop-blur-sm rounded-[100px] p-8 lg:p-2 scale-100 w-full  lg:max-w-none mx-auto pt-20 lg:pt-8 mb-25">
            <div className="relative w-full lg:w-1/2 flex justify-center items-center -mt-40  lg:-ml-8  md:h-100 md:mb-30 lg:h-175 ">
              <Image
                src={plantImages[currentSlide]}
                alt="plant images"
                width={700}
                height={700}
                className=" mx-auto mb-10 pb-5 object-contain drop-shadow-o2-plant"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center  lg:mt-0 p-10 lg:pr-12">
              <h3 className="text-xl lg:text-5xl font-semibold text-white/75">
                We Have Small And Best O2 Plants Collection’s
              </h3>
              <p className="text-lg lg:text-[1.75rem]  text-white/75 mt-12">
                Oxygen-producing plants, often referred to as &quot;O2
                plants,&quot; are those that release oxygen into the atmosphere
                through the process of photosynthesis.
              </p>
              <p className="text-lg lg:text-[1.75rem]  text-white/75 mt-12">
                Many plants can help filter out pollutants and toxins from the
                air, such as formaldehyde, benzene, and trichloroethylene. This
                makes the air cleaner and healthier to breathe.
              </p>
              <div className="flex flex-row justify-between items-center mt-2">
              <Button>Explore</Button>

              <div className="flex items-center gap-0">
                <button
                  onClick={leftArrow}
                  aria-label="previous image"
                  className={`p-2 rounded-full hover:bg-white/10 transition-colors ${ leftClicked ? "opacity-50" : "opacity-100"}`}
                >
                  <ChevronLeft size={24} />
                </button>

                <span className="text-xl font-medium w-20 text-center">
                  0{currentSlide + 1} / 0{plantImages.length}
                </span>

                <button
                  onClick={rightArrow}
                  className={`p-2 rounded-full hover:bg-white/10 transition-colors ${ rightClicked ? "opacity-50 scale-0.5" : "opacity-100"}`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default O2Section;
