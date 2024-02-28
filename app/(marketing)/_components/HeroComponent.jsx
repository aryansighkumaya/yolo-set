"use client";
import DrawerModal from "@/components/modals/drawer-modal";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroComponent = () => {  

  return (
    <div
      className={`bg-transparent text-white flex items-center justify-center h-[100px] fixed top-0 left-0 w-full z-30`}
    >
      <div className="w-full h-full flex justify-between items-center hero">
        <div className="flex justify-center items-center">
          <span className=" mt-[3.5rem]">
          <Image 
        src="/logo.png"
        alt="Logo"
        width={200}  
        height={250} 
        objectFit="contain"
      />
          </span>
          <div className="hidden lg:flex justify-center items-center gap-3 text-xl">
            <span >Products</span>

            <span >Learn</span>

            <span >Safety</span>

            <span>About </span>
          </div>
        </div>

        <div className="flex justify-center items-center 2 mr-2">
          <DrawerModal />
          <div className="hidden lg:flex  gap-3">
          <Button  variant="ghost" className=" rounded-[35px] text-lg text-center">Log In</Button>
          <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
