import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="container h-12 border-2 border-gray-100 flex items-center justify-center ">
      <ul className="navigation-list items-start flex text-sm font-medium text-gray-800 h-full">
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Horoscope</Link>
        </li>
        <li>
          <Link href="#">Free Kundli</Link>
        </li>
        <li>
          <Link href="#">Kundli Matchmaking</Link>
        </li>
        <li>
          <Link href="#">Panchang</Link>
        </li>
        <li>
          <Link href="#">Numerology</Link>
        </li>
        <li>
          <Link href="#">Nadi</Link>
        </li>
        <li>
          <Link href="#">Tarot</Link>
        </li>
        <li>
          <Link href="#">Planets</Link>
        </li>
        <li>
          <Link href="#">Love</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <div className="flex items-center justify-center">
            <span>
              <Link href="#">More</Link>
            </span>
            <span className="mt-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                />
              </svg>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
