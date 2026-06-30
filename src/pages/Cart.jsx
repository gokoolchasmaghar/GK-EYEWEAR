import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <ShoppingBag size={48} className="mx-auto mb-6 text-gray-300" />
        <h1 className="text-2xl font-light mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">
          Looks like you haven't added anything to your cart yet.
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
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-10">
        YOUR CART ({cartItems.length})
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Cart items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 border-b border-gray-200 pb-6"
            >
              <Link to={`/products/${item.id}`} className="w-24 h-24 bg-gray-50 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </Link>

              <div className="flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {item.brand}
                </p>
                <Link
                  to={`/products/${item.id}`}
                  className="text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </Link>
                <p className="text-sm font-semibold mt-2">
                  RS. {item.price.toLocaleString()}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3 border border-gray-300">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-50"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <p className="text-sm font-semibold whitespace-nowrap">
                RS. {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}

          <Link
            to="/"
            className="inline-block text-sm underline underline-offset-2 hover:text-gray-600 transition-colors mt-4"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Order summary */}
        <div className="bg-gray-50 p-6 h-fit">
          <h2 className="text-lg font-medium mb-5">Order Summary</h2>

          <div className="space-y-3 text-sm mb-5">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>RS. {cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-4 mb-6">
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>RS. {cartTotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Tax included</p>
          </div>

          <Link
            to="/checkout"
            className="block text-center w-full bg-[#0f1c3f] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;