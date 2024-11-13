'use client';

import Image from 'next/image';
import coinLogoImg from '@/app/assets/coin-img.webp';
import zimoImg from '@/app/assets/zimo-logo.webp';
import birdImage from '@/app/assets/home-img.webp';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function WelcomePage() {
 const router = useRouter();

 return (
  <div className="bg-[#001D0B] p-5 w-full h-screen overflow-y-auto">
   <div className="bg-[#3A6600] w-full h-full rounded-[31px] ">
    {/*top bar  */}
    <div className="p-[16px]">
     <div className="rounded-[24px]  h-[147px]  w-full shadow_cus flex justify-center gap-3 items-center bg-[linear-gradient(180deg,#3A6600,#1B2908)]">
      <Image
       src={coinLogoImg}
       width={70}
       height={70}
       className="w-[60px] h-[60px] object-contain"
       alt="coin-image"
      />
      <Image
       src={zimoImg}
       width={180}
       height={42}
       className="w-[173px] h-[50px]"
       alt="coin-image"
      />
     </div>
    </div>

    <div className="relative">
     <div className="w-full h-full absolute inset-0 bg-[linear-gradient(180deg,#00833200,#001d0b)]" />
     <div className="relative pb-7">
      <div className="w-full mt-1">
       <Image
        src={birdImage}
        width={370}
        height={350}
        className="w-full h-[323px] "
        alt="bird-image"
       />
      </div>

      <p className="max-w-[249px] mx-auto text-[25px] mt-2 text-[#DDFF00] text-center ">
       It’s time to get reward for your dedicated activity on Telegram{' '}
      </p>

      <div className="mt-[35px]">
       <Button
        title={'Hop-in'}
        onClick={router.push('/home')}
       />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
