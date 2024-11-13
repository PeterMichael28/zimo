import bgImage from '@/app/assets/main-bg.png';
import dpImage from '@/app/assets/pp.png';
import blurBg from '@/app/assets/top-bg.png';
import smallLogo from '@/app/assets/smallLogo.png';
import birdImg from '@/app/assets/bird2.png';
import settingsIcon from '@/app/assets/SettingsIcon.png';
import giftsIcon from '@/app/assets/giftsImg.png';
import cypherIcon from '@/app/assets/cypherImg.png';
import turboImg from '@/app/assets/turboImg.png';
import bigCoinImg from '@/app/assets/BigCoinImg.png';
import bgImg2 from '@/app/assets/bgImg2.png';
import Image from 'next/image';

export default function HomePage() {
 return (
  <div className="bg-[#001D0B] w-full h-screen overflow-y-auto">
   {/* 1st section */}
   <div className="w-full h-[255px] relative pb-[15px]">
    <Image
     src={bgImage}
     width={370}
     height={260}
     className="w-full h-full  absolute inset-0"
     alt="bg-image"
    />

    <div className="relative w-full h-full pt-[35px] px-5 flex flex-col">
     <div className="flex justify-between items-start">
      <div className="flex gap-2 items-center">
       <Image
        src={dpImage}
        width={35}
        height={35}
        className="w-[35px] h-[35px] "
        alt="dp-image"
       />

       <div>
        <h3 className="text-sm font-bold text-white leading-none">
         John Doe
        </h3>
        <p className="text-[10px] text-[#DDFF00] ">Bronze</p>

        <div className="mt-1 h-[2px] w-[109px] rounded-[25px] bg-[#3A6600]">
         <div className="bg-[#DDFF00] w-[26px] rounded-[25px] h-full" />
        </div>
       </div>
      </div>

      <div className="w-[151px] h-[37px] relative">
       <Image
        src={blurBg}
        width={151}
        height={37}
        className="w-full h-full  absolute inset-0"
        alt="bg-image"
       />
       <div className="relative w-full h-full p-[6px] flex items-center justify-between">
        <div className="flex items-center gap-[7px]">
         <div className="size-[25px] rounded-full bg-black/25 p-[7px] flex justify-center items-center">
          <Image
           src={smallLogo}
           width={15}
           height={15}
           className="w-full h-full "
           alt="logo-image"
          />
         </div>

         <div>
          <p className="text-white text-xs leading-none">
           Total Score
          </p>
          <p className="text-xs font-extrabold">89,000</p>
         </div>
        </div>

        {/* settings icon */}
        <Image
         src={settingsIcon}
         width={18}
         height={18}
         className="w-[18px] h-[18px]  "
         alt="settingsIcon"
        />
       </div>
      </div>
     </div>

     <Image
      src={birdImg}
      width={120}
      height={120}
      className="size-[130px]  mt-auto mx-auto"
      alt="bird-image"
     />
    </div>
   </div>

   {/* 2nd section */}
   <div className="bg-[#162600] relative -top-4 h-fit  w-full rounded-t-[40px] p-4">
    {/* 1st card */}
    <div className="h-[46px] bg-[#283714] rounded-[14px] flex items-center justify-between pr-6 pl-4">
     <div className="flex items-center gap-2">
      <Image
       src={giftsIcon}
       width={18}
       height={18}
       className="w-[18px] h-[18px]"
       alt="giftsIcon"
      />
      <div>
       <p className="text-xs text-[#DDFF00]">Daily Reward</p>
       <p className="text-[10px] text-[#ffffff67]">
        November 10, 2020
       </p>
      </div>
     </div>

     <p className="font-bold text-xs text-white">103pts</p>
    </div>

    {/* 2nd card */}
    <div className="h-[46px] bg-[#283714] rounded-[14px] flex items-center justify-between pr-6 pl-4 mt-2">
     <div className="flex items-center gap-2">
      <Image
       src={cypherIcon}
       width={18}
       height={18}
       className="w-[18px] h-[18px]"
       alt="cypherIcon"
      />
      <div>
       <p className="text-xs text-[#DDFF00]">Daily Cipher</p>
       <p className="text-[10px] text-[#ffffff67]">
        November 10, 2020
       </p>
      </div>
     </div>

     <p className="font-bold text-xs text-white">103pts</p>
    </div>

    {/* action btn */}

    <div className="h-[46px] rounded-[14px] bg-[linear-gradient(180deg,#427500,#1d3300)] mt-2 flex items-center justify-between pl-6 pr-5">
     <p className=" text-white font-bold">Boost</p>

     <Image
      src={turboImg}
      width={48}
      height={18}
      className="w-[35px] h-[30px]"
      alt="cypherIcon"
     />
    </div>

    {/* iprice and coin */}
    <div className="mt-[70px] relative z-20">
     <h3 className="text-[#DDFF00] text-[24px] font-extrabold text-center">
      89,000
     </h3>

     <Image
      src={bigCoinImg}
      width={130}
      height={120}
      className="w-[120px] h-[118px] mt-4 object-contain mx-auto"
      alt=""
     />
    </div>
   </div>

   {/* 3rd section */}
   <div className="h-fit relative -top-[100px] pb-10">
    {/* bgImg2 */}
    <Image
     src={bgImg2}
     width={370}
     height={260}
     className="w-full h-full  absolute inset-0"
     alt="bg-image"
    />

    <div className="relative pt-24 px-4">
     <h3 className="text-[#DDFF00] text-xs font-medium">
      Leader Board
     </h3>

     <div className="gap-y-2.5 flex flex-col w-full mt-3">
      {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
       <div
        key={i}
        className="h-[46px] bg-[#1E3400] flex items-center pl-3 pr-3 justify-between rounded-[16px]"
       >
        <div className="flex gap-2 items-center">
         <Image
          src={dpImage}
          width={35}
          height={35}
          className="w-[35px] h-[35px] rounded-lg"
          alt="dp-image"
         />
         <p className="text-xs font-bold text-[#427500]">Alex. M</p>
        </div>

        <div className="flex gap-2 items-center">
         <p className="text-xs font-bold text-[#427500]">
          830,001pts
         </p>
         <div className="size-[22px] rounded-full bg-[#427500] flex justify-center items-center text-white font-bold text-xs">
          <span>{num}</span>
         </div>
        </div>
       </div>
      ))}

      <div className="flex justify-end mt-2">
       <p className="text-[#DDFF00] text-xs">See all &gt;&gt;</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
