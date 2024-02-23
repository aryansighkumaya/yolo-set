import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "../ui/button";
import {  Menu } from "lucide-react";
import { ImCross } from "react-icons/im";

import HeroMob from "@/app/(marketing)/hero-mob";
import Image from "next/image";

const DrawerModal = () => {
  return (
    <Drawer direction="right">
  <DrawerTrigger asChild>
  <Button className=' lg:hidden'>
    <Menu size={20}/>
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className=" flex flex-col gap-2">
    <DrawerHeader>
     <div className=" flex justify-between w-[95%] relative">
     <DrawerTitle>
   
<span className=" mt-6">
    
<Image 
        src="/logo.png"
        alt="Logo"
        width={200}  
        height={200} 
        objectFit="contain" 
        className=" hidden dark:block"
      />

        <Image 
        src="/logo-light.png"
        alt="Logo"
        width={200}
        height={200}
        objectFit="contain" 
        className=" dark:hidden"
      />
</span>
     </DrawerTitle>
      <DrawerClose>
<ImCross size={23}/>
      </DrawerClose>
     </div>
    </DrawerHeader>

   <HeroMob />
    </div>
  </DrawerContent>
</Drawer>
  )
}

export default DrawerModal
  