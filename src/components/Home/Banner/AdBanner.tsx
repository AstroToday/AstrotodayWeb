import React from 'react';
import Image from 'next/image';
import { BANNER_CELEBRITY_DIMENSIONS } from '@/constants/Home';

const AdBanner = () => {
  return (
    <div
      className="banner-gradient w-full h-[20rem] bg-[#f6f6f6]
    rounded-xl flex px-14 pt-5"
    >
      <div>
        <Image
          width={BANNER_CELEBRITY_DIMENSIONS}
          height={BANNER_CELEBRITY_DIMENSIONS}
          alt=""
          src={'/ranbir-web.webp'}
          className="w-auto h-full"
        />
      </div>
      <div className="right-content flex flex-col justify-center mb-3">
        <div className="flex flex-col">
          <span className="text-3xl font-semibold text-gray-700 mb-3">
            Ranbir Kappor{' '}
            <span className="text-gray-900 font-normal">Recommends</span>{' '}
            <span className="text-gray-800">AstroToday</span>
          </span>
          <span className="text-4xl font-normal text-gray-700">
            For{' '}
            <span className="text-black font-medium">Reliable Predictions</span>
          </span>
        </div>
        <div className="mt-7 ml-1">
          <button
            className="bg-[#ff872bed] text-white px-9 py-[9px] rounded-full font-semibold text-lg text-[18.6px]
            hover:opacity-90 active:opacity-70 transition-opacity duration-[160ms]
            drop-shadow-sm"
          >
            Chat Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
