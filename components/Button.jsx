import { cn } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';
import buttonBg from '@/app/assets/ButtonBg.png';
const Button = ({ className, title, onClick }) => {
 return (
  <div
   className={cn(
    'h-[50px] relative w-[148px] flex justify-center items-cente pt-[10px] mx-auto',
    className,
   )}
   onClick={onClick}
  >
   <Image
    src={buttonBg}
    width={370}
    height={350}
    className="w-full h-full absolute inset-0 "
    alt="button-image"
   />
   <p className="relative text-sm font-semibold text-black">
    {title}
   </p>
  </div>
 );
};

export default Button;
