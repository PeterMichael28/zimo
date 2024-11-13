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
import Button from '@/components/Button';

export default function HomePage() {
 return (
  <div className="bg-[#001D0B] w-full h-screen overflow-y-auto">
   {/* 1st section */}
   <div className="w-full h-[196px] relative pb-[15px]">
    <Image
     src={bgImage}
     width={370}
     height={260}
     className="w-full h-full  absolute inset-0"
     alt="bg-image"
    />

    {/* 1st section */}
    <div className="relative w-full h-full pt-[39px] pl-7 flex items-center gap-2 ">
     <Image
      src={birdImg}
      width={78}
      height={90}
      className="w-[78px] h-[90px]"
      alt="bird-image"
     />

     <div>
      <h3 className="text-[20px] font-extrabold text-[#df0]">
       Invite & referrals
      </h3>
      <p className="text-xs  text-[#df0]">
       You and your friends will receive bonus
      </p>
     </div>
    </div>

    <div className="bg-[#162600] relative -top-5 h-fit  w-full rounded-t-[40px] px-4 pt-5 pb-10">
     <div className="grid grid-cols-3 gap-4">
      <div className="bg-[#283714] rounded-[14px] w-full h-[62px] flex flex-col justify-center items-center">
       <h3 className="text-sm font-bold text-white">10,000pts</h3>
       <p className="text-[#999999] text-xs max-w-[70px] leading-none">
        Bonus Details here
       </p>
      </div>

      <div className="bg-[#283714] rounded-[14px] w-full h-[62px] flex flex-col justify-center items-center">
       <h3 className="text-sm font-bold text-white">20,000pts</h3>
       <p className="text-[#999999] text-xs max-w-[70px] leading-none">
        Bonus Details here
       </p>
      </div>

      <div className="bg-[#283714] rounded-[14px] w-full h-[62px] flex flex-col justify-center items-center">
       <h3 className="text-sm font-bold text-white">50,000pts</h3>
       <p className="text-[#999999] text-xs max-w-[70px] leading-none">
        Bonus Details here
       </p>
      </div>
     </div>

     <div className="mt-[49px]">
      <h3 className="text-[#DDFF00] text-xs font-medium">
       Invite list
      </h3>

      <div className="mt-2 rounded-[14px] bg-[#283714] p-3 ">
       <div className="space-y-2.5">
        {[1, 2, 3, 4].map((num, i) => (
         <div
          key={i}
          className="h-[46px] bg-[#122000] flex items-center pl-3 pr-3 justify-between rounded-[16px]"
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
          </div>
         </div>
        ))}
       </div>

       <div className="flex justify-center mt-5">
        <svg
         width="26"
         height="26"
         viewBox="0 0 26 26"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <g clipPath="url(#clip0_3_361)">
          <path
           d="M7.58331 10.8333L13 16.25L18.4166 10.8333H7.58331Z"
           fill="#DDFF00"
          />
         </g>
         <defs>
          <clipPath id="clip0_3_361">
           <rect
            width="26"
            height="26"
            fill="white"
           />
          </clipPath>
         </defs>
        </svg>
       </div>
      </div>
     </div>

     <div className="mt-7 flex justify-center">
      <Button
       title={'Invite Friends'}
       className={'w-[148px]'}
       //    onClick={router.push('/home')}
      />
     </div>
    </div>
   </div>
  </div>
 );
}
