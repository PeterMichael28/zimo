'use client';

import React from 'react';
import menuBg from '@/app/assets/menu-bg.png';
import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@/app/assets/icons/HomeIcon';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/utils';
import { MineIcon } from '@/app/assets/icons/MineIcon';
import { FriendsIcon } from '@/app/assets/icons/FriendsIcon';
import { DollarIcon } from '@/app/assets/icons/DollarsIcon';
import coinLogoImg from '@/app/assets/coin-img.webp';
const Menu = () => {
 const pathname = usePathname();
 console.log(pathname);
 return (
  <div className="h-[61px] absolute bottom-5 w-full max-w-[381px] backdrop-blur-[14px] z-40 bg-[#2542006c]  g-[linear-gradient(180deg,#000_0%,#254200)] rounded-[34px]">
   <div className="w-full h-full flex items-center justify-between px-[28px]">
    <Link
     href={'/home'}
     className="flex flex-col items-center w-fit gap-1.5"
    >
     <HomeIcon
      className={cn(
       pathname == '/home' ? 'fill-[#DF0]' : 'fill-[#ADADAD]',
      )}
     />
     <span
      className={cn(
       'text-xs ',
       pathname == '/home' ? 'text-[#DF0]' : 'text-[#ADADAD]',
      )}
     >
      Home
     </span>
    </Link>

    <div className="flex flex-col items-center w-fit gap-1.5">
     <MineIcon
      className={cn(
       pathname == '/mine' ? 'fill-[#DF0]' : 'fill-[#ADADAD]',
      )}
     />
     <span
      className={cn(
       'text-xs ',
       pathname == '/mine' ? 'text-[#DF0]' : 'text-[#ADADAD]',
      )}
     >
      Mine
     </span>
    </div>

    <Link
     href={'/friends'}
     className="flex flex-col items-center w-fit gap-1.5"
    >
     <FriendsIcon
      className={cn(
       pathname == '/friends' ? 'fill-[#DF0]' : 'fill-[#ADADAD]',
      )}
     />
     <span
      className={cn(
       'text-xs capitalize',
       pathname == '/friends' ? 'text-[#DF0]' : 'text-[#ADADAD]',
      )}
     >
      friends
     </span>
    </Link>

    <div className="flex flex-col items-center w-fit gap-1.5">
     <DollarIcon
      className={cn(
       pathname == '/earn' ? 'fill-[#DF0]' : 'fill-[#ADADAD]',
      )}
     />
     <span
      className={cn(
       'text-xs capitalize',
       pathname == '/earn' ? 'text-[#DF0]' : 'text-[#ADADAD]',
      )}
     >
      earn
     </span>
    </div>

    <div className="flex flex-col items-center w-fit gap-1.5">
     <Image
      src={coinLogoImg}
      width={20}
      height={20}
      className="w-[20px] h-[20px] object-contain"
      alt="coin-image"
     />
     <span
      className={cn(
       'text-xs capitalize',
       pathname == '/airdrop' ? 'text-[#DF0]' : 'text-[#ADADAD]',
      )}
     >
      airdrop
     </span>
    </div>
   </div>
  </div>
 );
};

export default Menu;
