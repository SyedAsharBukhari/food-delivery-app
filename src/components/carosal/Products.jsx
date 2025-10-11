
import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Cheese Burger",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Chicken Pizza",
    price: 899,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QKvmzjxgce5L2mCNZBRr0pmh6CN3W5I2_g&s",
  },
  {
    id: 3,
    title: "Pasta Alfredo",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Fresh Salad",
    price: 350,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgjRec2qZnLtt3IQus9akdaVscwECKwA2mQ&s",
  },
];

export default function FoodProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
        closeModal();

    setFormData({ name: "", address: "", phone: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    alert("Thank you! Your order has been submitted.");
  };

  return (
    <div className=" bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 ">
           Our Delicious Foods
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">Rs {item.price}</p>
                <button
                  onClick={() => openModal(item)}
                  className="bg-[#E01B6F] text-white px-4 py-2 rounded-lg w-full hover:bg-[#c2185b] transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Section */}
     {isOpen &&   <div open={isOpen} onClose={closeModal} className="relative z-50">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

          {/* Modal panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-2xl font-semibold text-[#E01B6F] mb-4">
                Order Details
              </div>

              {selectedProduct && (
                <div className="mb-4">
                  <h3 className="text-lg font-medium">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-gray-600">Price: Rs {selectedProduct.price}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border rounded-lg p-2 focus:outline-[#E01B6F]"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                  className="w-full border rounded-lg p-2 focus:outline-[#E01B6F]"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full border rounded-lg p-2 focus:outline-[#E01B6F]"
                />

                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#E01B6F] text-white hover:bg-[#c2185b]"
                  >
                    Submit Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}
