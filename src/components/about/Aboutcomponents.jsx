import React from "react";

const Aboutcomponents = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-[#E01B6F] mb-6">
          About <span className="text-gray-800">Foodify</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Welcome to <span className="font-semibold">Foodify</span> — your
          ultimate destination for delicious meals delivered right to your
          doorstep! We believe that great food brings people together, and
          that’s why we’ve made it our mission to connect you with your favorite
          dishes from the best restaurants in town.
        </p>

        {/* Mission Section */}
        <div className="bg-whitep-8 mb-10">
          <h2 className="text-2xl font-bold text-[#E01B6F] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To make food delivery fast, simple, and enjoyable — anytime,
            anywhere. We aim to bring happiness through every meal and ensure
            every customer enjoys a delightful experience with every order.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="p-6 hover:shadow-lg transition">
            <h3 className="text-[#E01B6F] text-xl font-semibold mb-2">
            Wide Variety
            </h3>
            <p className="text-gray-600 text-sm">
              From local favorites to international cuisines — we’ve got it all.
            </p>
          </div>
          <div className="p-6 hover:shadow-lg transition">
            <h3 className="text-[#E01B6F] text-xl font-semibold mb-2">
               Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Fresh and hot meals at your doorstep — right on time!
            </p>
          </div>
          <div className="p-6 hover:shadow-lg transition">
            <h3 className="text-[#E01B6F] text-xl font-semibold mb-2">
             Affordable
            </h3>
            <p className="text-gray-600 text-sm">
              Great food shouldn’t be expensive — enjoy more, spend less.
            </p>
          </div>
          <div className="p-6 hover:shadow-lg transition">
            <h3 className="text-[#E01B6F] text-xl font-semibold mb-2">
               24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">
              We’re always here to help — your satisfaction is our priority.
            </p>
          </div>
        </div>

        {/* Promise Section */}
        <div className="bg-[#E01B6F] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-3"> Our Promise</h2>
          <p className="text-base leading-relaxed">
            Every dish is made with love and care, and every delivery with speed
            and a smile. Because at <span className="font-semibold">Foodify</span>,
            it’s not just about food — it’s about making your day better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutcomponents;
