"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://tech-gadget-server.vercel.app/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch products.", "error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://tech-gadget-server.vercel.app/products/${productId}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          Swal.fire("Deleted!", "Product has been deleted.", "success");
          fetchProducts(); // reload products
        } else {
          Swal.fire("Error!", "Failed to delete product.", "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
        console.error(error);
      }
    }
  };

  const formatDate = (date) => new Date(date).toLocaleDateString();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Manage Products ({products.length})
      </h1>

      {products.length === 0 && (
        <div className="text-center py-20 text-gray-500 text-xl">
          No products found.
        </div>
      )}

      {products.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full bg-base-100 shadow rounded-xl">
            <thead>
              <tr className="text-base font-semibold">
                <th>Title</th>
                <th>Category</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="font-medium">{product.title}</td>
                  <td>
                    <span className="badge badge-info badge-sm px-3 py-3">
                      {product.category}
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2 justify-center">
                      <Link
                        href={`/product/${product._id}`}
                        className="btn btn-sm btn-info"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
