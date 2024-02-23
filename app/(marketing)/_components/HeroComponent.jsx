"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroComponent = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY <= 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-transparent text-white flex items-center justify-center h-[100px] fixed top-0 left-0 w-full z-30`}
    >
      <div className="w-full h-full flex justify-between items-center hero">
        <div className="flex justify-center items-center gap-3">
          <span>
            <h1 className=" text-white text-5xl">Yollo</h1>
          </span>
          <div className="hidden lg:flex justify-center items-center gap-2 text-xl ">
            <span>Products</span>

            <span>Learn</span>

            <span>Safety</span>
          </div>
        </div>

        <div className="flex justify-center items-center 2 mr-2">
          <Button className=' lg:hidden'>
            <Menu size={20}/>
          </Button>
          <div className="hidden lg:flex  gap-3">
          <button>login</button>
          <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
