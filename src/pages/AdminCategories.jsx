import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";

const initialCategories = [
  { id: 1, name: "Sunglasses", slug: "sunglasses", products: 16, isActive: true },
  { id: 2, name: "Opticals", slug: "opticals", products: 8, isActive: true },
  { id: 3, name: "Contact Lenses", slug: "contact-lenses", products: 5, isActive: true },
  { id: 4, name: "Meta AI Glasses", slug: "meta-ai-glasses", products: 4, isActive: true },
  { id: 5, name: "Collections", slug: "collections", products: 12, isActive: false },
];

function AdminCategories() {
  const [categories, setCategories] = useState(initialCategories);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({ name: "", slug: "", isActive: true });

  const openAddModal = () => {
    setEditingCategory(null);
    setFormData({ name: "", slug: "", isActive: true });
    setShowModal(true);
  };

  const openEditModal = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      isActive: category.isActive,
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editingCategory.id ? { ...c, ...formData } : c
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        ...formData,
        products: 0,
      };
      setCategories((prev) => [...prev, newCategory]);
    }
    setShowModal(false);
  };

  const autoSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Categories ({categories.length})</h2>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-[#0f1c3f] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#1a2a5a] transition-colors"
        >
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Category Name</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Slug</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Products</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">
                  {category.name}
                </td>
                <td className="px-6 py-4">
                  <code className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    /{category.slug}
                  </code>
                </td>
                <td className="px-6 py-4 text-gray-600">{category.products}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    category.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {category.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(category)}
                      className="text-blue-500 hover:text-blue-700 p-1.5 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded transition-colors"
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

      {/* Add/Edit Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModal(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 w-full max-w-md p-8 shadow-xl rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h3>
              <button onClick={() => setShowModal(false)}>
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Category Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setFormData({
                      ...formData,
                      name,
                      slug: autoSlug(name),
                    });
                  }}
                  required
                  placeholder="e.g. Sunglasses"
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Slug (auto-generated)
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  placeholder="e.g. sunglasses"
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50"
                />
                <p className="text-xs text-gray-400 mt-1">
                  URL: /collections/{formData.slug || "..."}
                </p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="accent-gray-900"
                  />
                  Active (visible on website)
                </label>
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
                  {editingCategory ? "Update" : "Add Category"}
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminCategories;