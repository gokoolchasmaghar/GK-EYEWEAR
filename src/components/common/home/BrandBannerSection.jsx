import { brandBanners } from "../../../data/products";

function BrandBannerSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-center text-sm tracking-widest text-gray-500 mb-2">
        LEVEL UP YOUR FASHION WITH THE TOP BRANDS
      </p>

      <h2 className="text-center text-3xl md:text-4xl font-light tracking-wide mb-12">
        AT THE CENTER OF ATTENTION
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {brandBanners.map((brand) => (
          <a
            key={brand.id}
            href={brand.link}
            className="block aspect-square overflow-hidden"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out hover:scale-125"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default BrandBannerSection;