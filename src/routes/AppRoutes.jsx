import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductListing from '../pages/ProductListing';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import OrderConfirmation from '../pages/OrderConfirmation';
import Login from '../pages/Login';
import Profile from '../pages/Profile';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections/:category" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;