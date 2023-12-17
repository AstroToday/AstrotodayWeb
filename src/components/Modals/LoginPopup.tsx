import React, { ChangeEvent, useState } from 'react';
import { FLAG_DIMENSIONS } from '@/constants/Home';

const LoginPopup = (/*{ onClose }: { onClose: () => void }*/) => {
  // todo: Work on closing the modal
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(cleanedValue);
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
      <div className="fixed top-56 w-[31rem] bg-white py-5 rounded-lg flex items-center flex-col px-[3.5rem]">
        <div className="top-txt mb-5">
          <span className="text-lg leading-6 text-black font-semibold">
            Login/Sign up
          </span>
        </div>
        <div className="phn_ctn bg-[#f6f6f6] h-12 flex items-center py-3 px-7 rounded-lg mb-2">
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
            <span className="text-md font-normal">+91</span>
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
              className="border-none outline-none bg-inherit h-7 text-base font-medium w-[13.2rem]"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your mobile number"
              maxLength={10}
            />
          </div>
        </div>
        <div className="text-center text-[0.719rem] text-primary font-medium mb-5">
          {' '}
          You&apos;ll receive a single-use verification code via text message
        </div>
        <div className="flex items-start justify-start ml-[6px]">
          <div className="rounded-full">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="privacy_policy"
                id="privacy_policy"
                className="form-radio w-4 h-4 cursor-pointer"
              />
            </label>
          </div>
          <div className="text-xs ml-[6px] font-normal">
            I permit astrotoday.com and their linked astrologers to contact me
            using email, phone, or SMS.
            <br />
            Any doubts, you can <a href="#">Check Terms and Condition</a>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-primary rounded-sm">
            <span className="text-white">Send OTP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPopup;
