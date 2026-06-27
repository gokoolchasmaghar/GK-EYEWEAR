import { newArrivals } from "../../../data/products";
import ProductCard from "./ProductCard";

function NewArrivalsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide mb-12">
        NEW ARRIVALS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#0f1c3f] text-white px-12 py-3 text-sm font-medium tracking-widest hover:bg-[#1a2a5a] transition-colors">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}

export default NewArrivalsSection;