import Image from 'next/image';
import { BlogCardType } from '@/Types/Home/Blogs';

const BlogCard = ({ data }: { data: BlogCardType }) => {
  return (
    <div className="w-80">
      <div className="pb-2 rounded-md blog-card-shadow  border-primary cursor-pointer">
        <div className="blog-header">
          <Image
            src={`${data.blogImg}`}
            width={152}
            height={50}
            alt=""
            className="w-full h-44 rounded-md"
          />
        </div>
        <div className="blog-body p-3 pb-[2px]">
          <span className="blog-title text-base font-semibold text-black">
            {data.blogTitle}
          </span>
        </div>
        <div className="blog-footer flex justify-between mx-2 mt-1">
          <span className="blogger-name text-sm leading-5 font-normal text-gray-800">
            {data.publisherName}
          </span>
          <span className="published-date text-sm font-normal leading-5 text-gray-800">
            {data.PublishedDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
