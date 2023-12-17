import Image from 'next/image';
import { IPublisher } from '@/Types/Home/News';
import React from 'react';

interface PublisherProp {
  publisherData: IPublisher[];
}
const NewsSection: React.FC<PublisherProp> = ({ publisherData }) => {
  return (
    <div>
      <div className="container py-8">
        <div className="top flex items-center justify-center">
          <span
            className={`font-bold text-[1.6rem] leading-9 uppercase text-white`}
          >
            Astrotoday In News
          </span>
        </div>
        <div className="bottom mt-4">
          <div className="publisher-list pt-2 flex items-center justify-evenly">
            {publisherData.map((publisher, key) => (
              <div key={key}>
                <Image
                  src={publisher.publisherImage}
                  alt={publisher.publisherName}
                  height={publisher.publisherHeight}
                  width={publisher.publisherWidth}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
