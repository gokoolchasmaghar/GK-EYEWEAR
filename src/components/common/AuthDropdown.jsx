// import { X } from "lucide-react";
// import { Link } from "react-router-dom";

// function AuthDropdown({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="fixed inset-0 z-40" onClick={onClose} />

//       <div className="absolute right-0 top-full mt-2 w-[320px] bg-white shadow-xl z-50 p-6">
//         <div className="flex justify-between items-center mb-5">
//           <h3 className="text-lg font-medium text-gray-900">
//             Sign in or create account
//           </h3>
//           <button onClick={onClose} aria-label="Close">
//             <X size={20} />
//           </button>
//         </div>

//         <button className="w-full bg-indigo-600 text-white py-3 text-sm font-medium hover:bg-indigo-700 transition-colors mb-4">
//           Sign in with shop
//         </button>
//         <Link
//   to="/login"
//   onClick={onClose}
//   className="block text-center border border-gray-900 text-gray-900 py-3 text-sm font-medium hover:bg-gray-50 transition-colors mb-4"
// >
//   Login / Sign Up
// </Link>

//         <div className="flex items-center gap-3 mb-4">
//           <div className="flex-1 h-px bg-gray-200" />
//           <span className="text-xs text-gray-400">OR</span>
//           <div className="flex-1 h-px bg-gray-200" />
//         </div>

//         <form className="mb-4">
//           <div className="relative">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border-b border-gray-300 py-2 pr-8 text-sm focus:outline-none focus:border-gray-900"
//             />
//             <button
//               type="submit"
//               className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
//               aria-label="Submit email"
//             >
//               →
//             </button>
//           </div>
//         </form>

//         <label className="flex items-center gap-2 text-sm text-gray-600 mb-5">
//           <input type="checkbox" defaultChecked className="accent-indigo-600" />
//           Email me with news and offers
//         </label>

//         <div className="border-t border-gray-200">
//           <Link
//   to="/profile"
//   onClick={onClose}
//   className="block py-3 border-b border-gray-200 text-sm hover:text-gray-600"
// >
//   Orders
// </Link>
//           <Link
//   to="/profile"
//   onClick={onClose}
//   className="block py-3 border-b border-gray-200 text-sm hover:text-gray-600"
// >
//   Profile
// </Link>
//           <a href="#" className="block py-3 text-sm hover:text-gray-600">
//             Track your Order
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AuthDropdown;






import { X } from "lucide-react";
import { Link } from "react-router-dom";

function AuthDropdown({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div className="absolute right-0 top-full mt-2 w-[320px] bg-white shadow-xl z-50 p-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-medium text-gray-900">
            Sign in or create account
          </h3>
          <button onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 text-sm font-medium hover:bg-indigo-700 transition-colors mb-4">
          Sign in with shop
        </button>

        <Link
          to="/login"
          onClick={onClose}
          className="block text-center border border-gray-900 text-gray-900 py-3 text-sm font-medium hover:bg-gray-50 transition-colors mb-4"
        >
          Login / Sign Up
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <form className="mb-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 py-2 pr-8 text-sm focus:outline-none focus:border-gray-900"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
              aria-label="Submit email"
            >
              →
            </button>
          </div>
        </form>

        <label className="flex items-center gap-2 text-sm text-gray-600 mb-5">
          <input type="checkbox" defaultChecked className="accent-indigo-600" />
          Email me with news and offers
        </label>

        <div className="border-t border-gray-200">
          <Link
            to="/profile"
            onClick={onClose}
            className="block py-3 border-b border-gray-200 text-sm hover:text-gray-600"
          >
            Orders
          </Link>

          <Link
            to="/profile"
            onClick={onClose}
            className="block py-3 border-b border-gray-200 text-sm hover:text-gray-600"
          >
            Profile
          </Link>

          <Link
  to="/track-order"
  onClick={onClose}
  className="block py-3 text-sm hover:text-gray-600"
>
  Track your Order
</Link>
        </div>
      </div>
    </>
  );
}

export default AuthDropdown;