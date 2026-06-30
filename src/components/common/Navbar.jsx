import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import AuthDropdown from "./AuthDropdown";
import SearchBar from "./SearchBar";
import CartModal from "./CartModal";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const menuItems = [
  "META AI GLASSES",
  "SALE",
  "COLLECTIONS",
  "SHOP BY BRANDS",
  "SUNGLASSES",
  "OPTICALS",
  "SHOP",
  "CONTACT LENSES",
  "LENSES",
  "ABOUT US",
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setActiveMenu(activeMenu === item ? null : item);
  };

  const closeAllPopups = () => {
    setActiveMenu(null);
    setIsAuthOpen(false);
    setIsSearchOpen(false);
  };

  const handleMenuItemNavigate = (item) => {
    const slug = item.toLowerCase().replace(/\s+/g, "-");
    navigate(`/collections/${slug}`);
    closeAllPopups();
  };

  return (
    <header className="bg-[#0f1c3f] text-white relative">
      {/* Top row: Logo + Icons */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link
          to="/"
          onClick={closeAllPopups}
          className="text-2xl md:text-3xl font-semibold tracking-[0.2em] mx-auto md:mx-0"
        >
          OPTORIUM
        </Link>

        <div className="hidden md:flex items-center gap-5 relative">
          {/* Account */}
          <div className="relative">
            <button
              aria-label="Account"
              onClick={() => {
                setIsAuthOpen(!isAuthOpen);
                setActiveMenu(null);
                setIsSearchOpen(false);
              }}
            >
              <User size={20} />
            </button>
            <AuthDropdown isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
          </div>

          {/* Search */}
          <button
            aria-label="Search"
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              setActiveMenu(null);
              setIsAuthOpen(false);
            }}
          >
            <Search size={20} />
          </button>

          {/* Wishlist */}
          <Link to="/wishlist" onClick={closeAllPopups} className="relative" aria-label="Wishlist">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-400 text-[#0f1c3f] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <button
            aria-label="Cart"
            className="relative"
            onClick={() => {
              setIsCartOpen(true);
              closeAllPopups();
            }}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-400 text-[#0f1c3f] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom row: Menu items (desktop only) */}
      <nav className="hidden md:flex items-center justify-center gap-8 border-t border-white/10 py-3 text-sm font-medium tracking-wide">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              handleMenuClick(item);
              setIsAuthOpen(false);
              setIsSearchOpen(false);
            }}
            onDoubleClick={() => handleMenuItemNavigate(item)}
            className={`hover:text-orange-400 transition-colors ${
              item === "SALE" ? "text-orange-400" : ""
            } ${activeMenu === item ? "text-orange-400" : ""}`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* MegaMenu dropdown */}
      <MegaMenu activeMenu={activeMenu} onClose={closeAllPopups} />

      {/* Search bar */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full z-30">
          <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </div>
      )}

      {/* Cart modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-4 border-t border-white/10 text-sm font-medium">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                handleMenuItemNavigate(item);
                setMobileMenuOpen(false);
              }}
              className={`text-left hover:text-orange-400 transition-colors ${
                item === "SALE" ? "text-orange-400" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;




