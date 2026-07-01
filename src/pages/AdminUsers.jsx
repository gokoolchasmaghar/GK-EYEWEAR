import { useState } from "react";
import { Eye, X, UserX, UserCheck } from "lucide-react";

const placeholderUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    joinedOn: "10 Jan 2026",
    orders: 3,
    totalSpent: 121611,
    isActive: true,
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "+91 9876543211",
    joinedOn: "15 Feb 2026",
    orders: 1,
    totalSpent: 33871,
    isActive: true,
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "+91 9876543212",
    joinedOn: "20 Mar 2026",
    orders: 5,
    totalSpent: 250000,
    isActive: false,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha@example.com",
    phone: "+91 9876543213",
    joinedOn: "01 Apr 2026",
    orders: 2,
    totalSpent: 67742,
    isActive: true,
  },
  {
    id: 5,
    name: "Vikram Mehta",
    email: "vikram@example.com",
    phone: "+91 9876543214",
    joinedOn: "12 May 2026",
    orders: 0,
    totalSpent: 0,
    isActive: true,
  },
];

function AdminUsers() {
  const [users, setUsers] = useState(placeholderUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleUserStatus = (userId) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === userId ? { ...u, isActive: !u.isActive } : u
      )
    );
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Users ({users.length})</h2>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-gray-900 w-64"
        />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm text-center">
          <p className="text-2xl font-semibold">{users.length}</p>
          <p className="text-xs text-gray-500 mt-1">Total Users</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm text-center">
          <p className="text-2xl font-semibold text-green-600">
            {users.filter((u) => u.isActive).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Active Users</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm text-center">
          <p className="text-2xl font-semibold text-red-500">
            {users.filter((u) => !u.isActive).length}
          </p>
          <p className="text-xs text-gray-500 mt-1">Inactive Users</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">User</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Phone</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Joined</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Orders</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Total Spent</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#0f1c3f] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.phone}</td>
                  <td className="px-6 py-4 text-gray-600">{user.joinedOn}</td>
                  <td className="px-6 py-4 text-gray-600">{user.orders}</td>
                  <td className="px-6 py-4 font-medium">
                    RS. {user.totalSpent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      user.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-blue-500 hover:text-blue-700 p-1.5 hover:bg-blue-50 rounded transition-colors"
                        aria-label="View user"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => toggleUserStatus(user.id)}
                        className={`p-1.5 rounded transition-colors ${
                          user.isActive
                            ? "text-red-500 hover:text-red-700 hover:bg-red-50"
                            : "text-green-500 hover:text-green-700 hover:bg-green-50"
                        }`}
                        aria-label="Toggle status"
                      >
                        {user.isActive ? <UserX size={16} /> : <UserCheck size={16} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSelectedUser(null)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-full max-w-md p-8 shadow-xl rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">User Details</h3>
              <button onClick={() => setSelectedUser(null)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="w-14 h-14 bg-[#0f1c3f] text-white rounded-full flex items-center justify-center text-xl font-medium">
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-lg">{selectedUser.name}</p>
                <p className="text-sm text-gray-500">{selectedUser.email}</p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${
                  selectedUser.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {selectedUser.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="font-medium">{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Joined On</p>
                  <p className="font-medium">{selectedUser.joinedOn}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-semibold">{selectedUser.orders}</p>
                  <p className="text-xs text-gray-500 mt-1">Total Orders</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-lg font-semibold">RS. {selectedUser.totalSpent.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">Total Spent</p>
                </div>
              </div>

              <button
                onClick={() => {
                  toggleUserStatus(selectedUser.id);
                  setSelectedUser({ ...selectedUser, isActive: !selectedUser.isActive });
                }}
                className={`w-full py-2.5 text-sm font-medium tracking-wide transition-colors ${
                  selectedUser.isActive
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {selectedUser.isActive ? "Deactivate User" : "Activate User"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminUsers;