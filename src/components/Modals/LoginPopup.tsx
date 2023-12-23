'use client';
import React, { ChangeEvent, useState } from 'react';
import { FLAG_DIMENSIONS } from '@/constants/Home';

const LoginPopup = ({ onClose }: { onClose: () => void }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanedValue);
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
      <div className="w-[33.13rem] bg-white rounded-lg -mt-16 relative">
        <button
          onClick={onClose}
          className="absolute text-2xl top-0 right-0 mt-4 mr-4 text-black leading-none font-semibold cursor-pointer hover:text-primary transition-all duration-[150ms]"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="max-w-[24.8rem] flex flex-col items-center justify-center mx-auto pt-5 pb-7">
          <div className="top-head mb-6 w-full">
            <div className="text-[17.5px] leading-6 text-black font-medium text-center">
              Sign up / Login
            </div>
          </div>
          <div className="phn_ctn bg-[#f6f6f6] w-full h-[2.906rem] flex items-center py-3 px-7 rounded-lg mb-2">
            <div className="country flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 225 150"
                  width={FLAG_DIMENSIONS}
                  height={FLAG_DIMENSIONS}
                >
                  <rect width="225" height="150" fill="#f93" />
                  <rect width="225" height="50" y="50" fill="#fff" />
                  <rect width="225" height="50" y="100" fill="#128807" />
                  <g transform="translate(112.5,75)">
                    <circle r="20" fill="#008" />
                    <circle r="17.5" fill="#fff" />
                    <circle r="3.5" fill="#008" />
                    <g id="d">
                      <g id="c">
                        <g id="b">
                          <g id="a">
                            <circle
                              r="0.875"
                              fill="#008"
                              transform="rotate(7.5) translate(17.5)"
                            />
                            <path
                              fill="#008"
                              d="M 0,17.5 0.6,7 C 0.6,7 0,2 0,2 0,2 -0.6,7 -0.6,7 L 0,17.5 z"
                            />
                          </g>
                          <use xlinkHref="#a" transform="rotate(15)" />
                        </g>
                        <use xlinkHref="#b" transform="rotate(30)" />
                      </g>
                      <use xlinkHref="#c" transform="rotate(60)" />
                    </g>
                    <use xlinkHref="#d" transform="rotate(120)" />
                    <use xlinkHref="#d" transform="rotate(-120)" />
                  </g>
                </svg>
              </span>
              <span className="text-[15.5px] font-normal mr-0.5">+91</span>
              <span className="cursor-pointer mt-[3px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                  </g>
                </svg>
              </span>
            </div>
            <div className="ml-2">
              <input
                type="tel"
                className="border-none outline-none bg-inherit h-7 text-base font-normal w-full placeholder:text-sm placeholder:text-slate-400"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your mobile number"
                maxLength={10}
              />
            </div>
          </div>
          <div className="text-center text-xs text-primary font-medium mb-6 w-full">
            {' '}
            You&apos;ll receive a single-use verification code via text message
          </div>
          <div className="flex items-start justify-start ml-0.5 w-full">
            <div className="rounded-full">
              <label>
                <input
                  type="radio"
                  name="privacy_policy"
                  id="privacy_policy"
                  className="form-radio w-4 h-4 cursor-pointer"
                />
              </label>
            </div>
            <div className="text-xs ml-2 font-normal ">
              I permit astrotoday.com and their linked astrologers to contact me
              using email, phone, or SMS.
              <br />
              Any doubts, you can <a href="#">Check Terms and Condition</a>
            </div>
          </div>
          <div className="mt-6 w-full">
            <button className="bg-primary rounded-lg w-full h-12 hover:opacity-90 active:opacity-80 transition-opacity duration-[225ms]">
              <span className="text-white text-center text-lg font-bold">
                Send OTP
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPopup;
