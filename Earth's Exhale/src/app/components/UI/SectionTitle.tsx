import React, { ReactNode } from "react"

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
      <div className='relative inline-flex items-center justify-center my-12 min-h-16.5'>
      {/**left side vector */}
      <div className='absolute bottom-0 left-0'>
        <svg
          width="64"
          height="66"
          viewBox="0 0 64 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M2.5 0V43C2.5 54.0457 11.4543 63 22.5 63H64"
            stroke="url(#paint0_linear_67_70)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_67_70"
              x1="63.5"
              y1="63"
              x2="-4.5"
              y2="-6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBD300" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
       <h2 className='text-4xl md:text-5xl  text-white px-4 py-2 z-10 inter font-semibold drop-shadow-section-title'
       >{children}</h2>
      {/**right side vector */}
      <div className="absolute top-0 right-0">
        <svg
          width="64"
          height="66"
          viewBox="0 0 64 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M61.5 65.5V22.5C61.5 11.4543 52.5457 2.50001 41.5 2.50001L1.09971e-05 2.50001"
            stroke="url(#paint0_linear_67_71)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_67_71"
              x1="0.500012"
              y1="2.50001"
              x2="68.5"
              y2="71.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBD300" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default SectionTitle
