"use client";
import DrawerModal from "@/components/modals/drawer-modal";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const HeroComponent = () => {  

  return (
    <div
      className={`bg-transparent text-white flex items-center justify-center h-[100px] fixed top-0 left-0 w-full z-30`}
    >
      <div className="w-full h-full flex justify-between items-center hero">
        <div className="flex justify-center items-center">
          <Link className=" mt-[3.5rem]"
          href={`/`}>
          <Image 
        src="/logo.png"
        alt="Logo"
        width={200}  
        height={250} 
        className=" object-contain"
      />
          </Link>
          <div className="hidden lg:flex justify-center items-center gap-3 text-xl">
            <Link href={"/products"} >Products</Link>

            <Link href={"/about"} >Learn</Link>

            <Link href={"/about"} >Safety</Link>

            <Link href={"/about"} >About</Link>
          </div>
        </div>

        <div className="flex justify-center items-center 2 mr-2">
          <DrawerModal />
          <div className="hidden lg:flex  gap-3">

          <SignInButton mode="modal">
          <Button  variant="ghost" className=" rounded-[35px] text-lg text-center">
            Log In
          </Button>
        </SignInButton>
          
          <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
