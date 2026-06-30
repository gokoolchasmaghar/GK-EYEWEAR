import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Order placed:", { formData, paymentMethod, cartItems, cartTotal });
    clearCart();
    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-light mb-4">Your cart is empty</h1>
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
        CHECKOUT
      </h1>

      <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-3 gap-10">
        {/* LEFT: Address + Payment */}
        <div className="md:col-span-2 space-y-8">
          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              />
              <input
                type="text"
                name="address"
                placeholder="Address (House no, Street, Area)"
                value={formData.address}
                onChange={handleChange}
                required
                className="col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-lg font-medium mb-4">Payment Method</h2>
            <div className="space-y-3">
              {[
                { id: "cod", label: "Cash on Delivery (COD)" },
                { id: "upi", label: "UPI (Razorpay Secure)" },
                { id: "card", label: "Credit / Debit Card" },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 border px-4 py-3 cursor-pointer text-sm ${
                    paymentMethod === method.id
                      ? "border-gray-900 bg-gray-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  {method.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-gray-50 p-6 h-fit">
          <h2 className="text-lg font-medium mb-5">Order Summary</h2>

          <div className="space-y-4 mb-5 max-h-64 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-contain bg-white flex-shrink-0"
                />
                <div className="flex-1 text-sm">
                  <p className="font-medium line-clamp-1">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap">
                  RS. {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 text-sm border-t border-gray-300 pt-4 mb-5">
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
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f1c3f] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors"
          >
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;