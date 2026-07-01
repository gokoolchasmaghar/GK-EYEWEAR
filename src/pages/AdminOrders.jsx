import { useState } from "react";
import { Eye, X } from "lucide-react";

const placeholderOrders = [
  {
    id: "OPT001",
    customer: "Rahul Sharma",
    email: "rahul@example.com",
    items: 2,
    total: 67742,
    status: "Delivered",
    date: "25 Jun 2026",
    address: "123, MG Road, Hyderabad, Telangana - 500001",
  },
  {
    id: "OPT002",
    customer: "Priya Singh",
    email: "priya@example.com",
    items: 1,
    total: 33871,
    status: "Shipped",
    date: "26 Jun 2026",
    address: "456, Banjara Hills, Hyderabad, Telangana - 500034",
  },
  {
    id: "OPT003",
    customer: "Amit Kumar",
    email: "amit@example.com",
    items: 3,
    total: 121611,
    status: "Processing",
    date: "27 Jun 2026",
    address: "789, Gachibowli, Hyderabad, Telangana - 500032",
  },
  {
    id: "OPT004",
    customer: "Sneha Reddy",
    email: "sneha@example.com",
    items: 1,
    total: 60940,
    status: "Pending",
    date: "28 Jun 2026",
    address: "321, Jubilee Hills, Hyderabad, Telangana - 500033",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-700",
  Processing: "bg-blue-100 text-blue-700",
  Shipped: "bg-purple-100 text-purple-700",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

const statusOptions = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

function AdminOrders() {
  const [orders, setOrders] = useState(placeholderOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Orders ({orders.length})</h2>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Order ID</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Customer</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Date</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Items</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Total</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#0f1c3f]">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.email}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.items} item(s)</td>
                  <td className="px-6 py-4 font-medium">
                    RS. {order.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className={`text-xs font-medium px-2 py-1 rounded-full border-0 focus:outline-none cursor-pointer ${statusColors[order.status]}`}
                    >
                      {statusOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-blue-500 hover:text-blue-700 p-1.5 hover:bg-blue-50 rounded transition-colors"
                      aria-label="View order"
                    >
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSelectedOrder(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-full max-w-lg p-8 shadow-xl rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Order #{selectedOrder.id}</h3>
              <button onClick={() => setSelectedOrder(null)}>
                <X size={22} />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Customer</p>
                  <p className="font-medium">{selectedOrder.customer}</p>
                  <p className="text-gray-500">{selectedOrder.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Order Date</p>
                  <p className="font-medium">{selectedOrder.date}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Shipping Address</p>
                <p className="font-medium">{selectedOrder.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Items</p>
                  <p className="font-medium">{selectedOrder.items} item(s)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Amount</p>
                  <p className="font-medium">RS. {selectedOrder.total.toLocaleString()}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Current Status</p>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[selectedOrder.status]}`}>
                  {selectedOrder.status}
                </span>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        updateStatus(selectedOrder.id, s);
                        setSelectedOrder({ ...selectedOrder, status: s });
                      }}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        selectedOrder.status === s
                          ? "bg-[#0f1c3f] text-white border-[#0f1c3f]"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminOrders;