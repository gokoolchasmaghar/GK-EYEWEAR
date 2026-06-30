import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

function CartModal({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl tracking-widest font-light">CART</h2>
          <button onClick={onClose} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex items-center justify-center">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 tracking-wide text-sm">
              YOUR CART IS EMPTY
            </p>
          ) : (
            <div className="w-full space-y-5 self-start">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain bg-gray-50"
                  />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase">{item.brand}</p>
                    <p className="text-sm font-medium mb-2">{item.name}</p>
                    <p className="text-sm font-semibold mb-2">
                      RS. {(item.price * item.quantity).toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="border rounded p-1 hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="border rounded p-1 hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between mb-4 text-sm font-semibold">
              <span>Subtotal</span>
              <span>RS. {cartTotal.toLocaleString()}</span>
            </div>

            <Link
              to="/cart"
              onClick={onClose}
              className="block text-center border border-[#0f1c3f] text-[#0f1c3f] py-3 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors mb-3"
            >
              VIEW CART
            </Link>

            <button className="w-full bg-[#0f1c3f] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartModal;