'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoginPopup from '@/components/Modals/LoginPopup';
import { ASTROTODAY_LOGO_DIMENSIONS } from '@/constants/Home';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className="container h-20 flex justify-around items-center">
      <div className="logo">
        <Link href="/">
          <Image
            width={ASTROTODAY_LOGO_DIMENSIONS}
            height={ASTROTODAY_LOGO_DIMENSIONS}
            alt=""
            src="https://instaastro-static-files.s3.amazonaws.com/static/img/instaastro-logo.svg"
          />
        </Link>
      </div>
      <div className="front-feature flex gap-x-4">
        <button
          className="group flex items-center border-[1.2px] px-2 py-2 border-gray-400 rounded gap-x-1
        hover:bg-primary transition-colors duration-[400ms] hover:border-primary"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="chat w-5 h-5 stroke-gray-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
          </span>
          <span className="text-gray-500 text-sm group-hover:text-white font-normal">
            Chat with Astrologer
          </span>
        </button>
        <button
          className="group flex items-center border-[1.2px] px-2 py-2 border-gray-400 rounded gap-x-1.5
        hover:bg-primary transition-colors duration-[400ms] hover:border-primary"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-[18px] h-[18px] stroke-gray-500 group-hover:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>
          <span className="text-gray-500 text-sm group-hover:text-white font-normal">
            Talk with Astrologer
          </span>
        </button>
        <button
          className="flex items-center justify-center bg-primary rounded-md py-0
        hover:opacity-90 active:opacity-70 transition-opacity duration-[160ms]"
          onClick={openModal}
        >
          <span className="text-sm text-white px-2 font-medium">
            Login/SignUp
          </span>
        </button>
        {isModalOpen && (
          <div className="">
            {' '}
            <LoginPopup /*onClose={closeModal}*/ />{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
