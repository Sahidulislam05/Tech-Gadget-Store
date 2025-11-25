"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const CATEGORIES = [
  "All",
  "Wearables",
  "Audio",
  "Accessories",
  "Display",
  "Smart Home",
  "Others",
];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://tech-gadget-server.vercel.app/products",
        {
          params: { search, category },
        }
      );
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-10 text-indigo-500">
        Our Products
      </h1>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-full md:w-1/3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-8 text-lg text-gray-500">
          Loading products...
        </p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-lg rounded-xl overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-2xl "
          >
            <figure className="overflow-hidden ">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-52 h-full p-5 object-cover transition-transform duration-500 hover:scale-110"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-indigo-600 font-semibold">
                {product.title}
              </h2>
              <p className="text-gray-700 line-clamp-2">
                {product.shortDescription}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="badge badge-outline">
                  Price: ${product.price ? parseInt(product.price) : "0"}
                </span>
                <span className="badge badge-secondary">
                  {product.category}
                </span>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link
                  key={product._id}
                  href={`/product/${product._id}`}
                  className="btn btn-primary btn-sm transition-all hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500 col-span-full mt-10 text-lg">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
