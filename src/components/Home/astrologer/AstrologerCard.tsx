import Image from 'next/image';
// import Ratings from '@/components/Shared/Ratings';
import { IAstrologerCard } from '@/Types/Home/astrologers';
import Ratings from '@/components/Shared/Ratings';
const AstrologerCard = ({ data }: { data: IAstrologerCard }) => {
  return (
    <div
      className="OurAstrologerCard w-[12.5rem] m-[10px] rounded-xl transition-shadow duration-[455ms]
    cursor-pointer pb-1.5 pt-1"
    >
      <div className="astrologer-profile flex justify-center items-center flex-col pt-4 pb-[0.4rem]">
        <div className="image">
          <Image
            src={data.profile_image}
            alt=""
            height={56}
            width={56}
            quality={100}
            loading="lazy"
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div className="astrologer-name text-lg font-semibold text-black pt-[11px]">
          {data.astrologerName}
        </div>
      </div>
      <div className="astrologer-profileBtm border-t-[1px] border-cyan-600 mx-3.5 flex items-center justify-center flex-col pb-4">
        <span className="text-lg mt-2 font-normal capitalize">
          {data.astrologerMainSkill}
        </span>
        <span className="rating mt-2">
          <Ratings value={data.astrologerRating} />
        </span>
      </div>
    </div>
  );
};

export default AstrologerCard;
