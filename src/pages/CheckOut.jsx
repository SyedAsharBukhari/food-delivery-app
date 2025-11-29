import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shippingcharges, totalamount } from "../Store/slice/ProductSlice";
import { FaShoppingCart, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaCreditCard, FaTruck, FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
  const { addtocartlist, subtotal, discount, shipping, total } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back to Cart
          </button>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FaShoppingCart className="w-8 h-8 mr-3 text-blue-600" />
            Checkout
          </h1>
          <p className="text-gray-600 mt-2">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <FaTruck className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Shipping Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaUser className="inline w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FaPhone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+92 300 1234567" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline w-4 h-4 mr-2" />
                    Complete Address
                  </label>
                  <textarea 
                    placeholder="House #, Street, Area" 
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input 
                      type="text" 
                      placeholder="Karachi" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input 
                      type="text" 
                      placeholder="75500" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <FaCreditCard className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Payment Method</h3>
              </div>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" defaultChecked />
                  <span className="ml-3 text-gray-900 font-medium">Cash on Delivery</span>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                  <span className="ml-3 text-gray-900 font-medium">Credit/Debit Card</span>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                  <span className="ml-3 text-gray-900 font-medium">Bank Transfer</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>

              {/* Cart Items */}
              <div className="max-h-64 overflow-y-auto mb-6">
                {addtocartlist.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 py-3 border-b border-gray-200">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-900">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary */}
              <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">Rs. {shipping.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">- Rs. {discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>Rs. {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                onClick={() => alert("Order placed successfully!")}
              >
                <FaCheckCircle className="w-5 h-5" />
                Place Order
              </button>

              {/* Security Note */}
              <div className="mt-4 text-center text-xs text-gray-500">
                <p className="flex items-center justify-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-green-600" />
                  Secure checkout process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;