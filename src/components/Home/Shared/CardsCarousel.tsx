import { cardDataType } from '@/Types/Home';
import React from 'react';
import AstrologerCard from '@/components/Home/astrologer/AstrologerCard';
import BlogCard from '@/components/Home/Blogs/BlogCard';
import TestimonialsCard from '@/components/Home/testimony/TestimonialsCard';

type CardCarouselProps = {
  cards: cardDataType[];
  cards_to_show: number; // todo: fix this from number to a more type friendly approach, make this the the length of the data
};
const CardsCarousel = ({ cards, cards_to_show }: CardCarouselProps) => {
  const showCards: cardDataType[] = cards.slice(0, cards_to_show);
  return (
    <div className="flex items-center justify-center">
      <button className="next w-10 h-10 flex items-center justify-center border-primary border-2 rounded-full mt-3">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <div className="astrologer-cards flex items-center justify-around mx-5 space-x-6">
        {showCards.map((cardData, index) => {
          switch (cardData.type) {
            case 'Blog':
              return <BlogCard key={index} data={cardData} />;
            case 'astrologerCard':
              return <AstrologerCard key={index} data={cardData} />;
            case 'reviewCard':
              return <TestimonialsCard key={index} data={cardData} />;
            default:
              return null;
          }
        })}
      </div>
      <button className="previous w-10 h-10 flex items-center justify-center border-primary border-2 rounded-full mt-3">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
export default CardsCarousel;
