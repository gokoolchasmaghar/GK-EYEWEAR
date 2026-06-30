import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function OrderConfirmation() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <CheckCircle size={56} className="mx-auto mb-6 text-green-500" />
      <h1 className="text-2xl md:text-3xl font-light mb-4">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-500 mb-8">
        Thank you for shopping with us. You will receive an email confirmation shortly with your order details.
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

export default OrderConfirmation;