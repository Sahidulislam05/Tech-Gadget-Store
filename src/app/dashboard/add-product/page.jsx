"use client";
import AuthContext from "@/provider/AuthContext";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CATEGORIES = [
  "All",
  "Wearables",
  "Audio",
  "Accessories",
  "Display",
  "Smart Home",
  "Others",
];
export default function AddProductPage() {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    category: CATEGORIES[0],
    shortDescription: "",
    fullDescription: "",
    price: "",
    imageUrl: "",
    releaseDate: new Date().toISOString().substring(0, 10),
    priority: "Medium",
    userEmail: user?.email || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Confirmation Popup
    const confirmed = await Swal.fire({
      title: "Add this product?",
      text: "Please confirm your submission.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    });

    if (!confirmed.isConfirmed) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://tech-gadget-server.vercel.app/products",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Product added successfully!");
        router.push("/product");

        // Reset form
        setFormData({
          title: "",
          category: CATEGORIES[0],
          shortDescription: "",
          fullDescription: "",
          price: "",
          imageUrl: "",
          releaseDate: new Date().toISOString().substring(0, 10),
          priority: "Medium",
          userEmail: user?.email,
        });
      } else {
        const errorData = await response.json();
        toast.error(`Failed: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3 text-center">
          Add a New Product
        </h1>
        <p className="text-base-content/70 max-w-xl mx-auto">
          Fill in the product details below to add a new item to the store.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-base-100 shadow-xl rounded-2xl p-8 border border-base-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Title */}
          <div className="form-control">
            <label className="label font-semibold">Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Category + Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="select select-bordered w-full"
                required
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label font-semibold">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
          </div>

          {/* Short Description */}
          <div className="form-control">
            <label className="label font-semibold">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
              placeholder="Short Description (Max 100 chars)"
              maxLength="100"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Full Description */}
          <div className="form-control">
            <label className="label font-semibold">Full Description</label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              placeholder="Write full product description here..."
              rows="5"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Price, Image, Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="form-control">
              <label className="label font-semibold">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="65.00"
                step="0.01"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Release Date</label>
              <input
                type="date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full mt-4 text-lg"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
