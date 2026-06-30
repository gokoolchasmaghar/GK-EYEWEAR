import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Package, LogOut } from "lucide-react";

function Profile() {
  const [activeTab, setActiveTab] = useState("orders");

  // Placeholder user data — real data will come from backend later
  const user = {
    name: "Areeba Khanam",
    email: "areeba@example.com",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-10">
        MY ACCOUNT
      </h1>

      <div className="grid md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="w-14 h-14 bg-[#0f1c3f] text-white rounded-full flex items-center justify-center text-lg font-medium mb-3">
              {user.name.charAt(0)}
            </div>
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-3 py-3 text-sm text-left ${
                activeTab === "orders" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
              }`}
            >
              <Package size={18} />
              My Orders
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-3 py-3 text-sm text-left ${
                activeTab === "profile" ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
              }`}
            >
              <User size={18} />
              Profile Details
            </button>
            <Link
              to="/login"
              className="w-full flex items-center gap-3 px-3 py-3 text-sm text-left text-red-500 hover:bg-gray-50"
            >
              <LogOut size={18} />
              Logout
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <div className="md:col-span-3">
          {activeTab === "orders" && (
            <div>
              <h2 className="text-lg font-medium mb-6">My Orders</h2>
              <div className="text-center py-16 border border-gray-200">
                <Package size={40} className="mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                <Link
                  to="/"
                  className="text-sm underline underline-offset-2 hover:text-gray-600"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <h2 className="text-lg font-medium mb-6">Profile Details</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Add phone number"
                    className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
                <button className="bg-[#0f1c3f] text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors">
                  SAVE CHANGES
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;