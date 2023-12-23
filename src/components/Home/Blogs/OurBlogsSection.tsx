import CardsCarousel from '@/components/Home/Shared/CardsCarousel';
import addCardType from '@/Helpers/Home/AddCardType';
import { BlogCardType } from '@/Types/Home/Blogs';
import { blogData } from '@/utils/data';

const OurBlogsSection = () => {
  return (
    <div className="container">
      <div className="astrotoday-blogs-header flex items-center justify-center flex-col">
        <span
          className={`font-bold text-[1.65rem] leading-9 text-gray-900 uppercase`}
        >
          Our Blogs
        </span>
        <span className="mt-[2px] text-lg text-gray-800">
          Dive into the cosmos and discover celestial wonders through our
          enlightening astrology blogs
        </span>
      </div>
      <div className="mt-3">
        <CardsCarousel
          cards={addCardType(blogData, 'Blog') as BlogCardType[]}
          cards_to_show={3}
        />
      </div>
    </div>
  );
};

export default OurBlogsSection;
