"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close mobile menu when resizing to large screens
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", hasDropdown: false },
    { name: "Plants Type", href: "#plants-type", hasDropdown: true },
    { name: "More", href: "#more", hasDropdown: false },
    { name: "Contact", href: "#contact", hasDropdown: false },
  ];

  return (
    <>
     <div className="flex mt-6 w-full items-center justify-between mx-auto px-20 py-2 md:py-4 text-white">
        {/* logo and name*/}
        <div className="flex shrink-0 items-center z-10 gap-2">
          <Image
            src={`/logo.png`}
            alt=""
            width={48}
            height={48}
            className="logo-shadow w-12 h-12"
          />
          <h1 className="inter font-black text-[1.75rem] pt-0.5">
            FloraVision.
          </h1>
        </div>

        {/* menu list*/}
        <nav className="hidden lg:flex  grow justify-center pt-3 ">
          <div className="flex grow justify-between items-center px-8">
            <ul className="flex items-center gap-10 text-[clamp(1.3rem,2vw,1.5rem)] font-normal indie mx-auto pr-20">
              {menuItems.map((item) => (
                <li key={item.name} className="group relative">
                  <a href={item.href} className="hover:opacity-70">
                    {item.name}

                    {item.hasDropdown && (
                      <Image
                        src="/arrowdown.png"
                        alt=""
                        width={15}
                        height={7}
                        className="inline-block ml-2 w-4 h-2"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            {/** Search and Bag Icons */}
            <ul className=" flex items-center gap-8">
              <li>
                <Image
                  src="/search-icon.png"
                  alt=""
                  width={26}
                  height={26}
                ></Image>
              </li>
              <li>
                <Image
                  src="/bag.png"
                  alt=""
                  width={26}
                  height={26}
                ></Image>
              </li>
            </ul>
          </div>
        </nav>

        {/* mobile menu options*/}
        <div className=" flex items-end pt-2 z-50 ">
          <button
          type="button"
            className="relative h-8 w-8 "
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
           
           <div 
              className={`
                absolute top-1/2 right-0 h-0 border-t-4 border-white rounded-sm transition-all duration-300 w-[1.938rem]
                ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
            />
            <div 
              className={`
                absolute top-1/2 right-0  h-0 border-t-4 border-white rounded-sm transition-all duration-300 w-[1.438rem]
                ${isMenuOpen ? 'w-[1.938rem] -rotate-45' : 'translate-y-1.5'}
                `}
            />
          </button>
        </div>
        <nav
          className={`lg:hidden fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="bg-green-950 opacity-95 w-full h-full flex flex-col items-center justify-center">
            <ul className="text-white text-center">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="group relative my-6 text-2xl indie"
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:opacity-70"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <Image
                      src="/arrowdown.png"
                      alt=""
                      width={15}
                      height={7}
                      className="inline-block ml-2 w-4 h-2"
                    />
                  )}
                </li>
              ))}
            </ul>
            <ul className=" flex items-center gap-8 mt-6">
              <li>
                <button
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image src="/search-icon.png" alt="" width={26} height={26} />
                </button>
              </li>
              <li>
                <button
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image src="/bag.png" alt="" width={26} height={26} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
