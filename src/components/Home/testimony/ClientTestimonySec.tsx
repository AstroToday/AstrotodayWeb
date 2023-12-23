import CardsCarousel from '@/components/Home/Shared/CardsCarousel';
import addCardType from '@/Helpers/Home/AddCardType';
import { AstrotodayTestimonyCardType } from '@/Types/Home/CustomerTestimony';
import { clientTestimoniesData } from '@/utils/data';

const ClientTestimonySec = () => {
  return (
    <div className="container">
      <div className="client-testimonials-header flex items-center justify-center flex-col">
        <span className="font-bold text-2xl text-gray-900 uppercase">
          Client Testimonials
        </span>
        <span className="mt-[2px] text-lg text-gray-800">
          See why our users love us and how Astrotoday helped them find their
          path to happiness!
        </span>
      </div>
      <div className="mt-3">
        <CardsCarousel
          cards={
            addCardType(
              clientTestimoniesData,
              'reviewCard'
            ) as AstrotodayTestimonyCardType[]
          }
          cards_to_show={3}
        />
      </div>
    </div>
  );
};

export default ClientTestimonySec;
