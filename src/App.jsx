import { CartProvider } from './context/CartContext';
import AnnouncementBar from './components/common/AnnouncementBar';
import Navbar from './components/common/Navbar';
import HeroSection from './components/common/home/HeroSection';
import NewArrivalsSection from './components/common/home/NewArrivalsSection';
import TataCliqMyntraSection from './components/common/home/TataCliqMyntraSection';
import CustomerReviewsSection from './components/common/home/CustomerReviewsSection';
import BrandBannerSection from './components/common/home/BrandBannerSection';
import BlogPostsSection from './components/common/home/BlogPostsSection';
import Footer from './components/common/Footer';

function App() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <NewArrivalsSection />
      <TataCliqMyntraSection />
      <CustomerReviewsSection />
      <BrandBannerSection />
      <BlogPostsSection />
      <Footer />
    </CartProvider>
  );
}

export default App;
