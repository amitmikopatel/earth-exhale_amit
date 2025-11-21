import Image from "next/image";
import React from "react";
import Button from "./UI/Button";

interface Plant {
  id: number;
  info: string;
  price: string;
  image: string;
}

const plantData: Plant[] = [
  {
    id: 1,
    info: "I recently added a beautiful desk decoration plant to my workshop, and it has made such a positive difference!",
    price: "599",
    image: "/heroplant1.png",
  },
  {
    id: 2,
    info: "The greenary adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
    price: "399",
    image: "/heroplant2.png",
  },
];

const Trendyplants: React.FC = () => {
  return (
    <>
  
           <div className="w-full  flex flex-col gap-32 lg:gap-24">
              {plantData.map((plant, index) => {
                const isEven = index % 2 ===0;
                  return (
                    <div
                      key={plant.id}
                      className={`flex flex-col items-center bg-white/5 border border-white/33 backdrop-blur-sm rounded-[2.5rem] lg:rounded-[9.438rem] p-8 pt-0 
                      scale-100
                      lg:p-0 lg:h-131.5 lg:flex-row lg:justify-between ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}  
                        `}
                    >
                      <div className="w-full lg:w-5/12 flex justify-center items-center -mt-30 lg:-my-22.5">
                      <Image
                       src={plant.image} 
                       alt={"plant image"} 
                       loading="eager"
                       width={601} 
                       height={732}
                       className="w-[20rem] h-auto lg:w-150 lg:h-180 object-contain shrink-0 lg:mb-40 drop-shadow-hero-plant"
                       />
                      </div>

                      <div
                      className={`
                        w-full lg:w-7/12 flex flex-col justify-center px-0 lg:px-12 text-center lg:text-left -mt-5 lg:mt-0
                        lg:py-12 ${isEven ? "lg:pr-12 lg:pl-4" : "lg:pl-12 lg:pr-4"}
                        `}
                      >
                        <div className="inter font-semibold">
                          <h3 className="text-[clamp(1.75rem,3vw,2.375rem)] mb-6">
                            For Your Desks Decorations
                          </h3>
                          <p className="text-[clamp(1rem,2.5vw,1.25rem)] mb-6">
                            {plant.info}
                          </p>
                          <h3 className="text-[clamp(1.75rem,3vw,2.375rem)] mb-8">
                            Rs.{plant.price}/-
                          </h3>
                        </div>

                        <div className="flex gap-8 justify-center lg:justify-start">
                            <Button className="font-medium">Explore</Button>
                            <div className="border border-white p-2.5 rounded-xl hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                                <Image
                                src={`/bag.png`}
                                alt='add to cart' 
                                width={34} 
                                height={34} 
                                className="w-8 h-8 p-0.5"/>
                            </div>
                        </div>

                      </div>
                    </div>
                  )
              })}
           </div>
     
    </>
  );
};

export default Trendyplants;
