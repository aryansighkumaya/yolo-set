"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroComponent = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY <= 650);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-transparent text-white flex items-center justify-center h-[100px] ${
        isSticky ? "sticky top-0 left-0 w-full" : "relative"
      }`}
    >
      <div className="w-full h-full flex justify-between items-center hero">
        <div className="flex justify-center items-center gap-3">
          <span>
            <h1 className=" text-5xl">Yollo</h1>
          </span>
          <div className="flex justify-center items-center gap-2 text-xl">
            <span>Products</span>

            <span>Learn</span>

            <span>Safety</span>
          </div>
        </div>

        <div className=" mr-2">
          <button>login</button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
