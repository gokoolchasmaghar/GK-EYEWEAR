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
import TrackOrder from '../pages/TrackOrder';
import NotFound from '../pages/NotFound';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import AdminProducts from '../pages/AdminProducts';
import AdminOrders from '../pages/AdminOrders';
import AdminUsers from '../pages/AdminUsers';
import AdminCategories from '../pages/AdminCategories';
import AdminLayout from '../layouts/AdminLayout';

function AppRoutes() {
  return (
    <Routes>
      {/* User routes */}
      <Route path="/" element={<Home />} />
      <Route path="/collections/:category" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/track-order" element={<TrackOrder />} />

      {/* Admin routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
      <Route path="/admin/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
      <Route path="/admin/orders" element={<AdminLayout><AdminOrders /></AdminLayout>} />
      <Route path="/admin/users" element={<AdminLayout><AdminUsers /></AdminLayout>} />
      <Route path="/admin/categories" element={<AdminLayout><AdminCategories /></AdminLayout>} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;