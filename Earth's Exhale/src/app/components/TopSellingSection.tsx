import React from "react";
import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";

interface Plant {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
}
const topSellingPlants: Plant[] = [
  {
    id: 1,
    name: "Agaonema plant",
    desc: "The Aglaonem plant, commonly know as Chinese Evergreen know for its attractive foliage and ease of care",
    price: "Rs.300/-",
    image: "/plant-1.png",
  },
  {
    id: 2,
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: "Rs.380/-",
    image: "/plant-2.png",
  },
  {
    id: 3,
    name: "Cactus",
    desc: "It is know for their ability to thrive in arid environments",
    price: "Rs.259/-",
    image: "/plant-3.png",
  },
  {
    id: 4,
    name: "Swiss cheese plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: "Rs.400/-",
    image: "/plant-4.png",
  },
  {
    id: 5,
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: "Rs.450/-",
    image: "/plant-5.png",
  },
  {
    id: 6,
    name: "Agave plant",
    desc: "The Agave plant is a genus of succulent plants know for thier striking rosette of thick, fleshy leaves and architectural forms.",
    price: "Rs.359/-",
    image: "/plant-6.png",
  },
];

const TopSellingSection = () => {
  return (
    <>
      <section className="min-h-screen px-4 sm:px-8 lg:px-20 py-0 pt-20 text-white">
        <div className="flex justify-center">
          <SectionTitle>Our Top Selling Plants</SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-35 mt-22 place-items-center pb-10">
          {topSellingPlants.map((plant) => (
            <div key={plant.id} className="relative w-100 h-112.5 scale-100">
              <svg
                width="400"
                height="450"
                viewBox="0 0 512 631"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute inset-0 w-full h-full"
              >
                <foreignObject
                  x={-6.6}
                  y={-15.5999}
                  width={562}
                  height={682.87}
                >
                  <div
                    style={{
                      backdropFilter: "blur(12.5px)",
                      clipPath: "url(#bgblur_0_11_82_clip_path)",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </foreignObject>
                <g
                  filter="url(#filter0_d_11_82)"
                  data-figma-bg-blur-radius="25"
                >
                  <path
                    d="M420.961 1.75C467.994 -4.70912 511 31.3535 511 78.7764V553.471C511 595.444 476.974 629.471 435 629.471H77C35.0264 629.471 1 595.444 1 553.471V78.7764C1.00007 31.3535 44.0061 -4.70913 91.0391 1.75C142.32 8.79281 205.927 15.8027 256 15.8027C306.073 15.8027 369.68 8.79281 420.961 1.75Z"
                    fill="white"
                    fillOpacity="0.05"
                    stroke="url(#paint0_linear_127_2)"
                    strokeWidth="2"
                  />
                  <path
                    d="M439.361 11.1499C486.394 4.69078 529.4 40.7534 529.4 88.1763V562.871C529.4 604.844 495.374 638.871 453.4 638.871H95.4C53.4264 638.871 19.4 604.844 19.4 562.871V88.1763C19.4001 40.7534 62.4061 4.69078 109.439 11.1499C160.72 18.1927 224.327 25.2026 274.4 25.2026C324.473 25.2026 388.08 18.1927 439.361 11.1499Z"
                    stroke="url(#paint0_linear_11_82)"
                    strokeWidth="2"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_127_2"
                    x1="12"
                    y1="46.9707"
                    x2="453"
                    y2="606.471"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0.2" />
                    <stop offset="0.52" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.2" />
                  </linearGradient>
                  
                </defs>
              </svg>

              <div className="absolute inset-0 z-10 flex flex-col items-center pt-6 px-6">
                <div className="-mt-35">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    width={400}
                    height={400}
                    className="w-90 h-90 object-contain drop-shadow-top-selling-plants"
                  />
                </div>
                <div className="flex flex-col p-6 -mt-5  inter w-full font-normal ">
                  <h1 className="text-[1.5rem] ">{plant.name}</h1>
                    <p className="text-[1rem]">
                    {plant.desc}
                  </p>
                  <div className="flex items-cneter justify-between gap-4 mt-4">
                    <h1 className="text-[1.5rem]">{plant.price}</h1>
                    <div className="border border-white/50 p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                      <Image src={`/bag.png`} alt="add to cart" width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopSellingSection;
