import Image from 'next/image';
import Ratings from '@/components/Shared/Ratings';
import { AstrotodayTestimonyCardType } from '@/Types/Home/CustomerTestimony';

const TestimonialsCard = ({ data }: { data: AstrotodayTestimonyCardType }) => {
  return (
    <div className="astrotodayreviewcard w-[19.5rem] bg-white rounded-xl border border-primary mx-1">
      <div className="header flex flex-col items-center justify-center py-4">
        <div className="img">
          <Image
            src={data.img}
            alt=""
            height={56}
            width={56}
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="mt-2 review-rating">
          <Ratings value={5} />
        </div>
        <div className="name mt-1 text-[16.5px] font-semibold">{data.name}</div>
        <div className="mt-1 about-astrotoday text-sm px-3 text-center font-normal">
          <span>{data.description}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
