import HeroSection from '../components/common/home/HeroSection';
import NewArrivalsSection from '../components/common/home/NewArrivalsSection';
import TataCliqMyntraSection from '../components/common/home/TataCliqMyntraSection';
import CustomerReviewsSection from '../components/common/home/CustomerReviewsSection';
import BrandBannerSection from '../components/common/home/BrandBannerSection';
import BlogPostsSection from '../components/common/home/BlogPostsSection';

function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivalsSection />
      <TataCliqMyntraSection />
      <CustomerReviewsSection />
      <BrandBannerSection />
      <BlogPostsSection />
    </>
  );
}

export default Home;