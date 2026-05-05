import React from "react";

const offerImg =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200";

const Offers = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg bg-white">

          {/* LEFT CONTENT */}
          <div
            className="p-10 md:p-14 flex flex-col justify-center"
            data-aos="fade-right"
          >
            <span className="text-red-500 text-xs font-semibold uppercase tracking-wider">
              Limited Offer
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3 leading-tight">
              Get Flat 50% Off <br /> on Your Stay
            </h2>

            <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
              Book premium hotels at unbeatable prices with verified stays and
              seamless booking experience.
            </p>

            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <span className="bg-red-100 text-red-500 px-3 py-1 rounded-md text-sm font-medium">
                Code: OYO50
              </span>

              <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative h-64 md:h-auto"
            data-aos="fade-left"
          >
            <img
              src={offerImg}
              alt="offer"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Offers;