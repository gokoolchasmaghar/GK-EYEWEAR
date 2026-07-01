import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { newArrivals, tataCliqMyntra } from "../data/products";

const initialProducts = [...newArrivals, ...tataCliqMyntra];

function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    price: "",
    originalPrice: "",
    discount: "",
  });

  const openAddModal = () => {
    setEditingProduct(null);
    setFormData({ brand: "", name: "", price: "", originalPrice: "", discount: "" });
    setShowModal(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      brand: product.brand,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice || "",
      discount: product.discount || "",
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, ...formData, price: Number(formData.price), originalPrice: Number(formData.originalPrice), discount: Number(formData.discount) }
            : p
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: Number(formData.price),
        originalPrice: Number(formData.originalPrice),
        discount: Number(formData.discount),
        image: "https://via.placeholder.com/300x300/eee/333?text=New+Product",
      };
      setProducts((prev) => [...prev, newProduct]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Products ({products.length})</h2>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#0f1c3f] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1a2a5a] transition-colors"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Product</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Brand</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Price</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Discount</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-contain bg-gray-100 rounded"
                      />
                      <span className="font-medium text-gray-900 line-clamp-1 max-w-xs">
                        {product.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{product.brand}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    RS. {Number(product.price).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    {product.discount ? (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        {product.discount}% OFF
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openEditModal(product)}
                        className="text-blue-500 hover:text-blue-700 p-1.5 hover:bg-blue-50 rounded transition-colors"
                        aria-label="Edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded transition-colors"
                        aria-label="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModal(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-full max-w-md p-8 shadow-xl rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <button onClick={() => setShowModal(false)}>
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Brand</label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Price (RS.)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Original Price (RS.)</label>
                  <input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Discount (%)</label>
                <input
                  type="number"
                  value={formData.discount}
                  onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-gray-300 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#0f1c3f] text-white py-2.5 text-sm font-medium hover:bg-[#1a2a5a] transition-colors"
                >
                  {editingProduct ? "Update" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminProducts;