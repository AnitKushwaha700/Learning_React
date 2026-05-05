import React from "react";

const Newsletter = () => {
  return (
    <section className="min-h-[40vh] flex items-center bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Stay Updated
        </h2>

        <p className="text-gray-500 mt-3 mb-8">
          Get exclusive hotel deals and travel updates directly in your inbox.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 border border-gray-300 rounded-lg outline-none"
          />

          <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;