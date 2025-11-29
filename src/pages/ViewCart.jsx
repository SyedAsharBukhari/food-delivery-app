import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaArrowLeft, FaTag } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changequantity, coupcode, removeaddtocart, shippingcharges, subtotals, totalamount } from '../Store/slice/ProductSlice';

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { subtotal, discount, total, shipping  } = useSelector((state) => state.data)

  const [promoCode, setPromoCode] = useState("");

  // const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  console.log("discount===>", discount)

  // const shipping = 250;
  // const discount = 0;
  // const total = subtotal + shipping - discount;

const dispatch =  useDispatch()


const applypromocode = (e) => {
  e.preventDefault();
  dispatch(coupcode(promoCode)); 
  dispatch(totalamount());
};


console.log("totaltotaltotaltotal", total)

const handlequantity = (item, type) => {
  if (type === "minus" && item.quantity > 1) {
    const newQuantity = item.quantity - 1;
    const updateditem = {
      ...item,
      quantity: newQuantity,
      finalprice: item.price * newQuantity,
    };

    dispatch(changequantity(updateditem));

    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id ? updateditem : cartItem
    );
    setCartItems(updatedCart);
  } 
  
  else if (type === "plus") {
    const newQuantity = item.quantity + 1;
    const updateditem = {
      ...item,
      quantity: newQuantity,
      finalprice: item.price * newQuantity,
    };

    dispatch(changequantity(updateditem));

    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id ? updateditem : cartItem
    );
    setCartItems(updatedCart);
          
  }
            dispatch(subtotals())
  dispatch(totalamount())
// dispatch(coupcode())
dispatch(shippingcharges())
};

useEffect(()=> {
setCartItems(JSON.parse(localStorage.getItem("addtocartlist")))
dispatch(totalamount())
// dispatch(coupcode())
dispatch(shippingcharges())
},[])

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
            <FaArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FaShoppingCart className="w-8 h-8 mr-3" />
            Shopping Cart
          </h1>
          <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={item.thumbnail} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <div className="mt-1 text-sm text-gray-500">
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <button onClick={() => dispatch(removeaddtocart(item))} className="text-red-500 hover:text-red-700 transition-colors">
                        <FaTrash className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button onClick={() => handlequantity(item, "minus")} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <FaMinus className="w-3 h-3" />
                        </button>
                        <span className="text-gray-900 font-medium w-8 text-center">{item.quantity}</span>
                        <button onClick={() => handlequantity(item, "plus")} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                          <FaPlus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        {/* <p className="text-xl font-bold text-gray-900">Rs. {item.price * item.quantity}</p> */}
                        <p className="text-xl font-bold text-gray-900">Rs. {item.finalprice?.toFixed(2) || item.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Rs. {item.price.toLocaleString()} Each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button onClick={applypromocode} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Rs. {shipping}</span>
                </div>
                {/* {discount ! && ( */}
                  <div className="flex justify-between text-green-600">
                    <span>Use Promocode to Enjoy Discount</span>
                    <span>- Rs. {discount.toFixed(2)}</span>
                  </div>
                {/* )} */}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>Rs. {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Proceed to Checkout
              </Link>

              {/* Additional Info */}
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Free shipping on orders over Rs. 10,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty Cart Message (show when cart is empty) */}
        {cartItems.length === 0 && (
          <div className="text-center py-16">
            <FaShoppingCart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewCart;