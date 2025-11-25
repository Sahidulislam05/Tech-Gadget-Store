"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully!");
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-500 mt-2">
            Feel free to reach out. We’re always here to help!
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE – CONTACT INFO */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-xl rounded-2xl p-6 flex flex-row gap-4 items-center">
              <FaPhoneAlt className="text-3xl text-primary" />
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 shadow-xl rounded-2xl p-6 flex flex-row gap-4 items-center">
              <FaEnvelope className="text-3xl text-primary" />
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-gray-600">sahidulislamcst@gmail.com</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-xl rounded-2xl p-6 flex flex-row gap-4 items-center">
              <FaMapMarkerAlt className="text-3xl text-primary" />
              <div>
                <h3 className="font-bold text-lg">Location</h3>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="card bg-base-100 shadow-xl rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control w-full">
                <label className="label font-semibold">Your Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label font-semibold">Your Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label font-semibold">Message</label>
                <textarea
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
