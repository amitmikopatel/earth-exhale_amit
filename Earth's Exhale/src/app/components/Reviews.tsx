import React from "react";
import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";

interface Review {
  id: number;
  name: string;
  text: string;
  image: string;
}

const reviewersData: Review[] = [
  {
    id: 1,
    name: "Shelly Russel",
    text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
    image: "/review-1.png",
  },
  {
    id: 2,
    name: "Lula Rolfson",
    text: "Each one has its own unique charm and personality, and they've already started brigntening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    image: "/review-2.png",
  },
  {
    id: 3,
    name: "Carol Huels",
    text: "It's like bringing a little piece of nature indoors. Definitely worth the investment my plant collection has never looked better!",
    image: "/review-3.png",
  },
];

const Reviews = () => {
  return (
    <>
      <section className="min-h-screen px-4 sm:px-8  -mb-25 lg:px-20 py-20 text-white ">
        <div className="flex  justify-center">
          <SectionTitle>Customer Review</SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20  mt-20 inter">
          {reviewersData.map((review, index) => {
            const isLastItem = index === reviewersData.length - 1;
            const wrapperClasses = isLastItem
              ? "md:col-span-2 lg:col-span-1 flex justify-center"
              : "";

            return (
              <div key={review.id} className={wrapperClasses}>
                <div className="flex items-center justify-center">
                  <div className="relative w-100 h-112 scale-100">
                  <svg
                    width="400"
                    height="384"
                    viewBox="0 0 549 507"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M424.568 1.42432C470.394 -3.32067 511 32.2896 511 78.3247V393.155C511 435.128 476.974 469.155 435 469.155H77C35.0264 469.155 1 435.128 1 393.155V78.3247C1 32.2896 41.6056 -3.32067 87.4316 1.42432C139.318 6.7968 204.754 12.272 256 12.272C307.246 12.272 372.682 6.7968 424.568 1.42432Z"
                      fill="white"
                      fillOpacity="0.05"
                      stroke="url(#paint0_linear_139_2)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_139_2"
                        x1="12"
                        y1="35.248"
                        x2="307.283"
                        y2="537.873"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" stopOpacity="0.2" />
                        <stop offset="0.52" stopOpacity="0" />
                        <stop
                          offset="1"
                          stopColor="white"
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* this is the card content */}
                  <div className="absolute inset-0 z-10 p-10 flex flex-col items-start">
                    <div className="flex felx-row gap-5 items-center">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={88}
                        height={88}
                        className="rounded-full"
                      />

                      <div className="flex flex-col">
                        <h1 className="text-xl font-semibold">{review.name}</h1>
                        <Image
                          src={`/stars.png`}
                          alt="Rating out of 5"
                          width={131.1}
                          height={19}
                          className="mt-1 w-auto "
                        />
                      </div>
                    </div>

                    <p className="mt-6 text-lg opacity-80">{review.text}</p>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Reviews;
