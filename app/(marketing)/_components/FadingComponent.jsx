"use client";
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const FadingComponent = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - scrollY / 400;

      setOpacity(Math.min(1, Math.max(0, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` bg-transparent p-4 mb-4 h-[100vh] flex justify-center items-center flex-col gap-6`} style={{ opacity, transition: 'opacity 0.1s' }}>
      <h3 className=' text-center text-white text-5xl text-bold capitalize'>Unleash wanderlust, embrace serendipity</h3>

      <div className="flex flex-col gap-2">
      <SignUpButton mode='modal'>
      <Button className=" bg-[#bb8ade] w-[70vw] lg:w-[300px] rounded-[30px]">Create Account</Button>
      </SignUpButton>
         

      <SignInButton mode="modal">
      <Button className=" bg-[#bb8ade] w-[70vw] lg:hidden rounded-[30px]">
        Log In
      </Button>
        </SignInButton>
         
      </div>

    </div>
  );
};

export default FadingComponent;
