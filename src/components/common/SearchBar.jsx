import { useState } from "react";
import { Search, X } from "lucide-react";
import { newArrivals, tataCliqMyntra } from "../../data/products";

function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const allProducts = [...newArrivals, ...tataCliqMyntra];
  const results =
    query.trim() === ""
      ? []
      : allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="bg-[#0f1c3f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <Search size={20} className="text-white/60" />
        <input
          type="text"
          autoFocus
          placeholder="SEARCH FOR..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm tracking-wide outline-none"
        />
        <button onClick={onClose} aria-label="Close search">
          <X size={20} className="text-white" />
        </button>
      </div>

      {/* Results dropdown */}
      {query.trim() !== "" && (
        <div className="bg-white max-w-7xl mx-auto px-6 py-5 max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-gray-500 text-center py-6">
              No products found for "{query}"
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {results.map((product) => (
                <div key={product.id} className="cursor-pointer" onClick={onClose}>
                  <div className="aspect-square bg-gray-50 mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
                  <p className="text-sm font-medium line-clamp-1">{product.name}</p>
                  <p className="text-sm font-semibold">
                    RS. {product.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;