import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { newArrivals, tataCliqMyntra } from '../data/products';
import ProductCard from '../components/common/home/ProductCard';

function FilterSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-sm font-medium tracking-wide"
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

function ProductListing() {
  const { category } = useParams();
  const allProducts = [...newArrivals, ...tataCliqMyntra];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [maxPrice, setMaxPrice] = useState(150000);
  const [sortBy, setSortBy] = useState("default");

  const allBrands = [...new Set(allProducts.map((p) => p.brand))];

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((p) => p.price <= maxPrice);

    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [allProducts, selectedBrands, maxPrice, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl md:text-3xl font-light tracking-wide uppercase">
          {category ? category.replace(/-/g, ' ') : 'All Products'}
        </h1>
      </div>

      <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
        <p className="text-gray-500 text-sm">{filteredProducts.length} PRODUCTS</p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm border border-gray-300 px-3 py-2 focus:outline-none"
        >
          <option value="default">SORT BY</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1">
          <FilterSection title="PRICE">
            <input
              type="range"
              min="0"
              max="150000"
              step="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-600 mt-2">
              Up to RS. {maxPrice.toLocaleString()}
            </p>
          </FilterSection>

          <FilterSection title="BRAND">
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {allBrands.map((brand) => (
                <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="accent-gray-900"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </FilterSection>
        </aside>

        {/* Product Grid */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center py-16">
              No products match the selected filters.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;