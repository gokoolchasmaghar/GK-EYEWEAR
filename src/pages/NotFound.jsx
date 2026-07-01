import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-8xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-2xl font-light tracking-wide mb-4">
        PAGE NOT FOUND
      </h2>
      <p className="text-gray-500 mb-10">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Link
          to="/"
          className="bg-[#0f1c3f] text-white px-10 py-3 text-sm font-medium tracking-wide hover:bg-[#1a2a5a] transition-colors"
        >
          GO TO HOMEPAGE
        </Link>
        <Link
          to="/collections/sunglasses"
          className="border border-gray-300 text-gray-700 px-10 py-3 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

export default NotFound;