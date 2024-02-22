"use client";
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
    <div className={` bg-transparent p-4 mb-4 h-[100vh] flex justify-center items-center`} style={{ opacity, transition: 'opacity 0.1s' }}>
      <h1 className=' text-center text-indigo-500 text-6xl'>Welcome to the Yollo</h1>
    </div>
  );
};

export default FadingComponent;
