import { useState } from "react";
import { Package, CheckCircle, Truck, Home as HomeIcon } from "lucide-react";

const orderSteps = [
  { label: "Order Placed", icon: Package },
  { label: "Shipped", icon: Truck },
  { label: "Out for Delivery", icon: Truck },
  { label: "Delivered", icon: HomeIcon },
];

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [trackedOrder, setTrackedOrder] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    // Placeholder — real tracking will come from backend later
    setTrackedOrder({
      id: orderId,
      currentStep: 1,
      placedOn: "28 June 2026",
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-2">
        TRACK YOUR ORDER
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        Enter your order ID to check the current status of your delivery.
      </p>

      <form onSubmit={handleTrack} className="flex gap-3 mb-12">
        <input
          type="text"
          placeholder="Enter Order ID (e.g. OPT123456)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="flex-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
        />
        <button
          type="submit"
          className="bg-[#0f1c3f] text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors"
        >
          TRACK
        </button>
      </form>

      {trackedOrder && (
        <div className="border border-gray-200 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="font-medium">{trackedOrder.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Placed on</p>
              <p className="font-medium">{trackedOrder.placedOn}</p>
            </div>
          </div>

          {/* Progress steps */}
          <div className="flex items-center justify-between relative">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              const isComplete = index <= trackedOrder.currentStep;

              return (
                <div key={step.label} className="flex-1 flex flex-col items-center relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      isComplete ? "bg-[#0f1c3f] text-white" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {isComplete ? <CheckCircle size={20} /> : <Icon size={18} />}
                  </div>
                  <p
                    className={`text-xs text-center ${
                      isComplete ? "text-gray-900 font-medium" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>

                  {/* Connector line */}
                  {index < orderSteps.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 ${
                        index < trackedOrder.currentStep ? "bg-[#0f1c3f]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackOrder;