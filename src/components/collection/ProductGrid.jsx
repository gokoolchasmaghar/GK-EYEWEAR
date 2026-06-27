const products = [
  {
    id: 1,
    name: "RayBan Aviator",
    price: "₹7,999",
  },
  {
    id: 2,
    name: "Oakley Holbrook",
    price: "₹9,499",
  },
  {
    id: 3,
    name: "Tom Ford",
    price: "₹12,999",
  },
  {
    id: 4,
    name: "Carrera",
    price: "₹6,499",
  },
];

function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="h-64 bg-gray-200"></div>

            <div className="p-4">

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 font-bold">
                {product.price}
              </p>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default ProductGrid;