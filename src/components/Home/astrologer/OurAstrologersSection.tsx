import CardsCarousel from '@/components/Home/Shared/CardsCarousel';
import addCardType from '@/Helpers/Home/AddCardType';
import { astrologerData } from '@/utils/data';

const OurAstrologersSection = () => {
  return (
    <div className="container ">
      <div className="astrotoday-astrologers-top">
        <div className="flex items-center justify-center flex-col">
          <span
            className={`font-bold text-[1.65rem] leading-9 text-gray-900 uppercase`}
          >
            Our Astrologers
          </span>
          <span className="mt-1 text-lg text-gray-800">
            Access top-notch online astrologers in India through AstroToday for
            expert guidance in astrology{''}
          </span>
        </div>
      </div>
      <div className="astrotoday-astrologers-cards mt-3">
        <CardsCarousel
          //@ts-expect-error todo: fix this.
          cards={addCardType(astrologerData, 'astrologerCard')}
          cards_to_show={5}
        />
      </div>
    </div>
  );
};

export default OurAstrologersSection;
