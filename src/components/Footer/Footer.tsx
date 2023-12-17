import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#454545]">
      <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl">
            Sign Up to get your first chat @ ₹1 !
          </h1>
          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-[#ff872bed] rounded-lg gap-x-3 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10" />
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-white">Horoscope</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Daily Horoscope
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Monthly Horoscope
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Yearly Horoscope
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Kundli</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Free Kundli
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Kundli Matching
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Panchang</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Translation
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                Proofreading &amp; Editing
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300hover:underline hover:text-primary"
              >
                Content Creation
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-white">Contact Us</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                className="text-white transition-colors duration-300 hover:underline hover:text-primary"
              >
                info@merakiui.com
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-10" />
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <p className="mt-4 text-sm text-white sm:mt-0">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
