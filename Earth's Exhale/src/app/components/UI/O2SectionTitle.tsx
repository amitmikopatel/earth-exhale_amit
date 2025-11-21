import React, { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const O2SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <div className="relative inline-flex items-center justify-center p-4 my-12 min-h-16.5">
      {/**left side vector */}
      <div className="absolute bottom-0 left-0">
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 2.5L2.5 48.5C2.5 61.2026 12.7975 71.5 25.5 71.5H71"
            stroke="url(#paint0_linear_11_186)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11_186"
              x1="2"
              y1="0.499999"
              x2="71"
              y2="71.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55B000" />
              <stop
                offset="0.500917"
                stopColor="white"
                stopOpacity="0.156606"
              />
              <stop offset="1" stopColor="#50790B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h2 className="text-4xl md:text-5xl  text-white px-4 py-2 z-10 inter font-semibold drop-shadow-section-title">
        {children}
      </h2>
      {/**right side vector */}
      <div className="absolute top-0 right-0">
        <svg
          width="74"
          height="74"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71 71.5L71 25.5C71 12.7974 60.7025 2.5 48 2.5L2.49999 2.50001"
            stroke="url(#paint0_linear_11_185)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_11_185"
              x1="71.5"
              y1="73.5"
              x2="2.5"
              y2="2.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55B000" />
              <stop
                offset="0.500917"
                stopColor="white"
                stopOpacity="0.156606"
              />
              <stop offset="1" stopColor="#50790B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default O2SectionTitle;
