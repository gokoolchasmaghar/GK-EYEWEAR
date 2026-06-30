import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, Truck, RotateCcw, CreditCard, Globe, Share2, Plus, Minus, ChevronUp, Heart } from "lucide-react";
import { newArrivals, tataCliqMyntra } from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/common/home/ProductCard";
import CustomerReviewsSection from "../components/common/home/CustomerReviewsSection";

const DEFAULT_DESCRIPTION =
  "Premium quality eyewear crafted with precision. Features durable frame construction and UV-protected lenses for everyday comfort and style. Designed to deliver both fashion and function, this piece is a versatile addition to any collection.";

function CollapsibleSection({ title, children, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="flex items-center gap-3 text-sm font-medium tracking-wide">
          {Icon && <Icon size={18} />}
          {title}
        </span>
        {isOpen ? <ChevronUp size={18} /> : <Plus size={18} />}
      </button>
      {isOpen && <div className="pb-4 text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("53");

  const allProducts = [...newArrivals, ...tataCliqMyntra];
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-light">Product not found</h1>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Image */}
          <div className="bg-gray-50 aspect-square flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* RIGHT: Info */}
          <div>
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 text-xs tracking-wide text-gray-600 hover:text-gray-900">
                SHARE <Share2 size={14} />
              </button>
            </div>

            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
              {product.brand}
            </p>
            <h1 className="text-2xl md:text-3xl font-light mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl font-semibold">
                RS. {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">
                  RS. {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Tax included. <span className="underline cursor-pointer">Shipping calculated</span> at checkout
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="fill-[#8a5a2e] text-[#8a5a2e]" />
                ))}
              </div>
              <span className="text-sm text-gray-600">5.0 Reviews</span>
            </div>

            <div className="space-y-3 mb-6 border-t border-gray-200 pt-5">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Truck size={18} />
                Delivery: 5-7 Working Days
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <RotateCcw size={18} />
                Replacement: 7 Days from the date of delivery.
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CreditCard size={18} />
                COD: Available for Specific Locations only
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Globe size={18} />
                100% Authentic products
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-medium mb-2">Size:</p>
              <div className="flex gap-2 mb-6">
                {["53", "53/M"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border text-sm ${
                      selectedSize === size
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-500"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <p className="text-sm font-medium mb-2">Color:</p>
              <div className="mb-6">
                <button className="px-4 py-2 border border-gray-900 bg-gray-900 text-white text-sm">
                  Black
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border border-gray-300 p-2 hover:bg-gray-50"
                >
                  <Minus size={16} />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border border-gray-300 p-2 hover:bg-gray-50"
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="flex gap-3 mb-3">
                <button
                  onClick={() => addToCart({ ...product, quantity })}
                  className="flex-1 bg-[#5b5470] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#4a4560] transition-colors"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="border border-gray-300 px-5 hover:bg-gray-50 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-700"}
                  />
                </button>
              </div>

              <button className="w-full bg-[#1a1a2e] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#2a2a3e] transition-colors">
                BUY IT NOW
              </button>
            </div>

            <div className="mt-8">
              <CollapsibleSection title="DESCRIPTION">
                {product.description || DEFAULT_DESCRIPTION}
              </CollapsibleSection>
              <CollapsibleSection title="BRAND AUTHENTICITY & WARRANTY">
                All products are 100% authentic, sourced directly from authorized brand distributors. Warranty as per manufacturer terms.
              </CollapsibleSection>
              <CollapsibleSection title="SHIPPING & REPLACEMENT">
                Free shipping across India. Replacement available within 7 days of delivery for manufacturing defects.
              </CollapsibleSection>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 mt-16" />

        <div className="mt-16">
          <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide mb-12">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-[#0f1c3f] text-white px-12 py-3 text-sm font-medium tracking-widest hover:bg-[#1a2a5a] transition-colors">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>

      <CustomerReviewsSection />
    </div>
  );
}

export default ProductDetails;