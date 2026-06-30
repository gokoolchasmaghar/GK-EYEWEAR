import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Login data:" : "Signup data:", formData);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto px-6 py-16">
      <h1 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-2">
        {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
      </h1>
      <p className="text-sm text-gray-500 text-center mb-10">
        {isLogin
          ? "Welcome back! Please login to your account."
          : "Sign up to start shopping with us."}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-xs text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
            />
          </div>
        )}

        <div>
          <label className="block text-xs text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gray-900"
          />
        </div>

        {isLogin && (
          <div className="text-right">
            <Link to="/forgot-password" className="text-xs underline text-gray-600 hover:text-gray-900">
              Forgot Password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#0f1c3f] text-white py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors mt-2"
        >
          {isLogin ? "LOGIN" : "SIGN UP"}
        </button>
      </form>

      <p className="text-center text-sm mt-6 text-gray-600">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-[#0f1c3f] font-medium underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default Login;