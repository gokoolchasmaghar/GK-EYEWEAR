
import { useCart } from "../../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 mb-3">
        {product.discount && (
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs font-semibold px-2 py-1">
            SAVE {product.discount}%
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Add to Cart button - appears on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-0 left-0 right-0 bg-[#0f1c3f] text-white text-xs font-medium py-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ADD TO CART
        </button>
      </div>

      {/* Product info */}
      <div className="text-center">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.brand}
        </p>
        <h3 className="text-sm font-medium text-gray-900 mb-2 px-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="font-semibold text-gray-900">
            RS. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through">
              RS. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 mt-1">1 COLOR AVAILABLE</p>
      </div>
    </div>
  );
}

export default ProductCard;