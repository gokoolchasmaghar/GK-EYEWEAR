const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: "₹5999",
  },
  {
    id: 2,
    name: "Adidas Runner",
    price: "₹4999",
  },
  {
    id: 3,
    name: "Puma Classic",
    price: "₹3999",
  },
];

function ProductSection() {
  return (
    <section className="px-10 py-16">

      <h2 className="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-5 shadow"
          >
            <div className="h-60 bg-gray-200 rounded mb-4"></div>

            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p>{item.price}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default ProductSection;