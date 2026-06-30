import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import AnnouncementBar from './components/common/AnnouncementBar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <AnnouncementBar />
          <Navbar />
          <AppRoutes />
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
