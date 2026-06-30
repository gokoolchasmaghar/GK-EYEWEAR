import { Link } from "react-router-dom";
import { Heart, X } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <Heart size={48} className="mx-auto mb-6 text-gray-300" />
        <h1 className="text-2xl font-light mb-3">Your wishlist is empty</h1>
        <p className="text-gray-500 mb-8">
          Save items you love by clicking the heart icon on any product.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#0f1c3f] text-white px-10 py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors"
        >
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-10">
        MY WISHLIST ({wishlistItems.length})
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {wishlistItems.map((item) => (
          <div key={item.id} className="relative group">
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
              aria-label="Remove from wishlist"
            >
              <X size={16} />
            </button>

            <Link to={`/products/${item.id}`}>
              <div className="aspect-square bg-gray-50 mb-3 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {item.brand}
              </p>
              <Link
                to={`/products/${item.id}`}
                className="text-sm font-medium text-gray-900 mb-2 px-2 hover:text-gray-600 transition-colors block"
              >
                {item.name}
              </Link>
              <p className="text-sm font-semibold mb-3">
                RS. {item.price.toLocaleString()}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="w-full bg-[#0f1c3f] text-white text-xs font-medium py-2 tracking-wide hover:bg-[#1a2a5a] transition-colors"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;