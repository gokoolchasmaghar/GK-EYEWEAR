import { ShoppingCart, Package, Users, IndianRupee } from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "RS. 0",
    icon: IndianRupee,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Total Orders",
    value: "0",
    icon: ShoppingCart,
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    label: "Total Products",
    value: "16",
    icon: Package,
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    label: "Total Users",
    value: "0",
    icon: Users,
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

function AdminDashboard() {
  return (
    <div>
      <h2 className="text-xl font-medium mb-6">Welcome back, Admin!</h2>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm">
              <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={22} className={stat.iconColor} />
              </div>
              <p className="text-2xl font-semibold mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Orders placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
        <div className="text-center py-10 text-gray-400 text-sm">
          No orders yet — data will appear here once backend is connected.
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;