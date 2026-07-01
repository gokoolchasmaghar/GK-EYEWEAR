import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary check — real auth will come from backend
    if (formData.email === "admin@optorium.com" && formData.password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid credentials! Use admin@optorium.com / admin123");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white p-10 w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">OPTORIUM</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Admin Panel</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="admin@optorium.com"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0f1c3f] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors mt-2"
          >
            LOGIN TO ADMIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;