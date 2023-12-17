import AdBanner from '@/components/Home/Banner/AdBanner';
import AdBannerButton from '@/components/Home/Banner/AdBannerButton';
import OurAstrologersSection from '@/components/Home/astrologer/OurAstrologersSection';
import NewsSection from '@/components/Home/Shared/NewsSection';
import { newsData } from '@/utils/data';
import OurBlogsSection from '@/components/Home/Blogs/OurBlogsSection';
import ClientTestimonySec from '@/components/Home/testimony/ClientTestimonySec';
import AboutAstrology from '@/components/Home/Shared/AboutAstrology';
import Faq from '@/components/Home/Shared/Faq';

const Home = () => {
  return (
    <div>
      <section>
        <div className="bgBanner">
          <div className="relative container">
            <AdBanner />
          </div>
          <div className="flex space-x-5 w-full justify-center absolute top-[454px]">
            <AdBannerButton useChat={true} />
            <AdBannerButton useChat={false} />
          </div>
        </div>
      </section>
      <section className={'astrotoday-astrologers mt-12 pt-8'}>
        <OurAstrologersSection />
      </section>
      <section className="astrotoday-news mt-5 bg-[#321a27]">
        <NewsSection publisherData={newsData} />
      </section>
      <section className="astrotoday-blogs mt-7">
        <OurBlogsSection />
      </section>
      <section className={'client-testimonials mt-8  py-4 bg-[#FFF6F5]'}>
        <ClientTestimonySec />
      </section>
      <section className="about-astrology mt-10">
        <AboutAstrology />
      </section>
      <section className="faq's">
        <Faq />
      </section>
    </div>
  );
};
export default Home;
