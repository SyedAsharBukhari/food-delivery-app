// import React, { useEffect, useRef, useState } from 'react'
// import { FaRegHeart } from 'react-icons/fa'
// import { IoMdClose } from 'react-icons/io'
// import { RiShoppingCart2Line } from 'react-icons/ri'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { addtocart, changequantity, clearaddtocartlists, clearwishlist, removeaddtocart, removewishlist, subtotals } from '../../Store/slice/ProductSlice'
// import { FiMinus, FiPlus } from 'react-icons/fi'

// const Navbar = () => {
//   const { wishlists, addtocartlist, subtotal } = useSelector((state) => state.data)
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [sidebarType, setSidebarType] = useState("") // 'wishlist' or 'cart'

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const openSidebar = (type) => {
//     setSidebarType(type)
//     setSidebarOpen(true)
//   }

//   const handleProductClick = (item) => {
//     navigate(`/product/${item.id}`)
//     setSidebarOpen(false)
//   }

//   const closeSidebar = () => setSidebarOpen(false)



// const handlequantity = (item, type) => {
//   if (type === "minus" && item.quantity > 1) {
//     const newQuantity = item.quantity - 1;
//     const updateditem = {
//       ...item,
//       quantity: newQuantity,
//       finalprice: item.price * newQuantity,
//     };

//     dispatch(changequantity(updateditem));

//     const updatedCart = cartItems.map(cartItem =>
//       cartItem.id === item.id ? updateditem : cartItem
//     );
//     setCartItems(updatedCart);
//   } 
  
//   else if (type === "plus") {
//     const newQuantity = item.quantity + 1;
//     const updateditem = {
//       ...item,
//       quantity: newQuantity,
//       finalprice: item.price * newQuantity,
//     };

//     dispatch(changequantity(updateditem));

//     const updatedCart = cartItems.map(cartItem =>
//       cartItem.id === item.id ? updateditem : cartItem
//     );
//     setCartItems(updatedCart);
//   }
// };

//   useEffect(() => {
//     dispatch(subtotals());
//   }, [addtocartlist]);



//   // const handlequantity = (id, type) => {
//   //   console.log("id ----------====", id)
//   //   // const updatedCart = addtocartlist.map((item) => {
//   //   //   if (item.id === id) {
//   //   //     const newQuantity =
//   //   //       type === "minus"
//   //   //         ? item.quantity > 1
//   //   //           ? item.quantity - 1
//   //   //           : 1
//   //   //         : item.quantity + 1;

//   //   //     return { ...item, quantity: newQuantity };
//   //   //   }
//   //   //   console.log("itooooooooo", updatedCart)
//   //   //   return item;
//   //   // });

//   //     const updatedata = addtocartlist.map((item) => console.log("nnnnnn", item))


//   //   localStorage.setItem("addtocartlist", JSON.stringify(updatedCart));

//   // };

//   //     console.log("subtotalssubtotals ==>", subtotal)


//   return (
//     <div className='relative'>
//       {/* Header */}
//       <header className="shadow-md tracking-wide relative z-50">
//         <section className="py-2 bg-[#E01B6F] text-white text-right px-10">
//           <p className="text-sm">
//             <span className="mx-3 font-semibold">Address:</span> Karachi, Pakistan
//             <span className="mx-3 font-semibold">Contact No:</span> 123456789
//           </p>
//         </section>

//         <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-3 bg-white min-h-[65px]">
//           <Link to="/" className='text-2xl md:text-4xl font-bold text-[#E01B6F]'>Foodify</Link>

//           {/* Menu */}
//           <ul className="lg:flex gap-x-6 hidden">
//             <li><Link to='/' className="hover:text-[#E01B6F] text-[#E01B6F] font-medium">Home</Link></li>
//             <li><Link to='/about' className="hover:text-[#E01B6F] text-gray-800 font-medium">About</Link></li>
//             <li><Link to='/contact' className="hover:text-[#E01B6F] text-gray-800 font-medium">Contact</Link></li>
//           </ul>

//           {/* Icons */}
//           <div className='flex gap-6'>
//             <div className='relative cursor-pointer' onClick={() => openSidebar("wishlist")}>
//               {wishlists.length > 0 && (
//                 <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center'>
//                   {wishlists.length}
//                 </span>
//               )}
//               <FaRegHeart className='text-2xl' />
//             </div>

//             <div className='relative cursor-pointer' onClick={() => openSidebar("cart")}>
//               {addtocartlist.length > 0 && (
//                 <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center'>
//                   {addtocartlist.length}
//                 </span>
//               )}
//               <RiShoppingCart2Line className='text-2xl' />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Sidebar */}
//       {sidebarOpen && (
//         <div className="fixed inset-0 z-50 flex justify-end"
//         >
//           <div className="w-80 bg-white h-full relative shadow-xl overflow-y-auto transition-all duration-500 ease-in-out">
//             <button
//               className="absolute top-3 right-3 bg-[#E01B6F] text-white p-2 rounded-full hover:bg-[#c2185b]"
//               onClick={closeSidebar}
//             >
//               <IoMdClose className="text-xl" />
//             </button>

//             <div className="mt-12 px-4">
//               {/* Wishlist Section */}
//               {sidebarType === "wishlist" && (
//                 <>
//                   <h2 className="text-xl font-bold mb-4 text-[#E01B6F]">Wishlist</h2>

//                   {wishlists.length === 0 ? (
//                     <div className="flex flex-col items-center mt-20">
//                       <FaRegHeart className="text-7xl text-gray-400 mb-4" />
//                       <p className="text-gray-600">No products in wishlist</p>
//                       <button
//                         onClick={closeSidebar}
//                         className="mt-6 bg-[#E01B6F] text-white px-5 py-2 rounded-lg hover:bg-[#c2185b]"
//                       >
//                         Return to Shop
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       {wishlists.map((item) => (
//                         <div key={item.id} className="flex gap-4 mb-6 p-3 rounded-lg bg-gray-100 relative">
//                           <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
//                           <div>
//                             <h3 className="text-md font-semibold">
//                               {item.title.length > 10 ? item.title.substring(0, 12) + "..." : item.title}
//                             </h3>
//                             <p className="text-gray-600">Rs {item.price}</p>
//                             <button
//                               onClick={() => handleProductClick(item)}
//                               className="bg-[#E01B6F] text-[12px] text-white px-3 py-1 rounded-md hover:bg-[#c2185b]"
//                             >
//                               View Product
//                             </button>
//                           </div>
//                           <IoMdClose
//                             className="absolute top-2 right-2 text-white bg-[#E01B6F] rounded-full p-1 cursor-pointer"
//                             onClick={() => dispatch(removewishlist(item))}
//                           />
//                         </div>
//                       ))}

//                       <button
//                         onClick={() => dispatch(clearwishlist())}
//                         className="bg-[#E01B6F] text-white w-full py-2 rounded-lg hover:bg-[#c2185b]"
//                       >
//                         Clear All
//                       </button>
//                     </>
//                   )}
//                 </>
//               )}

//               {/* Cart Section */}
//               {sidebarType === "cart" && (
//                 <>
//                   <h2 className="text-xl font-bold mb-4 text-[#E01B6F]">Your Cart</h2>

//                   {addtocartlist.length === 0 ? (
//                     <div className="flex flex-col items-center mt-20">
//                       <RiShoppingCart2Line className="text-7xl text-gray-400 mb-4" />
//                       <p className="text-gray-600">No products in cart</p>
//                       <button
//                         onClick={closeSidebar}
//                         className="mt-6 bg-[#E01B6F] text-white px-5 py-2 rounded-lg hover:bg-[#c2185b]"
//                       >
//                         Return to Shop
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       {addtocartlist.map((item) => (
//                         <div key={item.id} className="flex gap-4 mb-6 p-3 rounded-lg bg-gray-100 relative">
//                           <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
//                           <div>
//                             <h3 className="text-md font-semibold">
//                               {item?.title?.length > 10 ? item.title.substring(0, 12) + "..." : item.title}
//                             </h3>
//                             <p className="text-gray-600">Rs: {item?.price}</p>




//                             {/* <p className="text-gray-600">Quantity: {item.quantity}</p> */}
//                             <p className="text-md text-gray-700 mb-3">
//                               <strong>Quantity:</strong>
//                               <br />
//                               <div className='flex gap-3 w-20 mt-2' style={{ backgroundColor: "#edededff" }}>
//                                 <FiMinus className='bg-[#e01b6f] text-white text-2xl p-1 rounded' onClick={() => handlequantity(item, "minus")} />
//                                 <span>{item.quantity}</span>
//                                 <FiPlus className='bg-[#e01b6f] text-white text-2xl p-1 rounded' onClick={() => handlequantity(item, "plus")} />
//                               </div>
//                             </p>









//                             <button
//                               onClick={() => handleProductClick(item)}
//                               className="bg-[#E01B6F] text-[12px] mt-3 text-white px-3 py-1 rounded-md hover:bg-[#c2185b]"
//                             >
//                               View Product
//                             </button>
//                           </div>
//                           <IoMdClose
//                             className="absolute top-2 right-2 text-white bg-[#E01B6F] text-lg rounded-full p-1 cursor-pointer"
//                             onClick={() => dispatch(removeaddtocart(item))}
//                           />
//                         </div>
//                       ))}

//                       <button
//                         onClick={() => dispatch(clearaddtocartlists())}
//                         className="bg-[#E01B6F] text-white w-full py-2 rounded-lg hover:bg-[#c2185b]"
//                       >
//                         Clear All
//                       </button>
//                       <div className='bottom-0 absolute w-70 '>
//                         <hr />
//                         <div className='flex gap-4 py-3'>
//                           <h2 className='text-lg'>Subtotal:</h2>
//                           <h3 className='text-lg'>Rs {subtotal.toFixed(2)}</h3>
//                         </div>
//                         <div className='flex gap-2 mb-2'>
//                           <Link
//                             to={"/view-cart"}
//                             className="bg-[#E01B6F] text-white w-20 py-2 my-2 rounded-lg hover:bg-[#c2185b]"
//                           >
//                             View Cart
//                           </Link>

//                           <Link
//                         to={"/checkout"}
//                             className="bg-[#E01B6F] text-white w-20 py-2 my-2 rounded-lg hover:bg-[#c2185b]"
//                           >
//                             Checkout
//                           </Link>

//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Navbar


import React, { useEffect, useRef, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addtocart, changequantity, clearaddtocartlists, clearwishlist, removeaddtocart, removewishlist, subtotals } from '../../Store/slice/ProductSlice'
import { FiMinus, FiPlus } from 'react-icons/fi'

const Navbar = () => {
  const { wishlists, addtocartlist, subtotal } = useSelector((state) => state.data)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarType, setSidebarType] = useState("") // 'wishlist' or 'cart'

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const openSidebar = (type) => {
    setSidebarType(type)
    setSidebarOpen(true)
  }

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`)
    setSidebarOpen(false)
  }

  const closeSidebar = () => setSidebarOpen(false)



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
};

  useEffect(() => {
    dispatch(subtotals());
  }, [addtocartlist]);



  // const handlequantity = (id, type) => {
  //   console.log("id ----------====", id)
  //   // const updatedCart = addtocartlist.map((item) => {
  //   //   if (item.id === id) {
  //   //     const newQuantity =
  //   //       type === "minus"
  //   //         ? item.quantity > 1
  //   //           ? item.quantity - 1
  //   //           : 1
  //   //         : item.quantity + 1;

  //   //     return { ...item, quantity: newQuantity };
  //   //   }
  //   //   console.log("itooooooooo", updatedCart)
  //   //   return item;
  //   // });

  //     const updatedata = addtocartlist.map((item) => console.log("nnnnnn", item))


  //   localStorage.setItem("addtocartlist", JSON.stringify(updatedCart));

  // };

  //     console.log("subtotalssubtotals ==>", subtotal)


  return (
    <div className='relative'>
      {/* Header */}
      <header className="shadow-md tracking-wide relative z-50">
        <section className="py-2 bg-[#E01B6F] text-white text-right px-10">
          <p className="text-sm">
            <span className="mx-3 font-semibold">Address:</span> Karachi, Pakistan
            <span className="mx-3 font-semibold">Contact No:</span> 123456789
          </p>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-3 bg-white min-h-[65px]">
          <Link to="/" className='text-2xl md:text-4xl font-bold text-[#E01B6F]'>Foodify</Link>

          {/* Menu */}
          <ul className="lg:flex gap-x-6 hidden">
            <li><Link to='/' className="hover:text-[#E01B6F] text-[#E01B6F] font-medium">Home</Link></li>
            <li><Link to='/about' className="hover:text-[#E01B6F] text-gray-800 font-medium">About</Link></li>
            <li><Link to='/contact' className="hover:text-[#E01B6F] text-gray-800 font-medium">Contact</Link></li>
          </ul>

          {/* Icons */}
          <div className='flex gap-6'>
            <div className='relative cursor-pointer' onClick={() => openSidebar("wishlist")}>
              {wishlists.length > 0 && (
                <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center'>
                  {wishlists.length}
                </span>
              )}
              <FaRegHeart className='text-2xl' />
            </div>

            <div className='relative cursor-pointer' onClick={() => openSidebar("cart")}>
              {addtocartlist.length > 0 && (
                <span className='absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center'>
                  {addtocartlist.length}
                </span>
              )}
              <RiShoppingCart2Line className='text-2xl' />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex justify-end"
        >
          <div className="w-80 bg-white h-full relative shadow-xl overflow-y-auto transition-all duration-500 ease-in-out">
            <button
              className="absolute top-3 right-3 bg-[#E01B6F] text-white p-2 rounded-full hover:bg-[#c2185b]"
              onClick={closeSidebar}
            >
              <IoMdClose className="text-xl" />
            </button>

            <div className="mt-12 px-4">
              {/* Wishlist Section */}
              {sidebarType === "wishlist" && (
                <>
                  <h2 className="text-xl font-bold mb-4 text-[#E01B6F]">Wishlist</h2>

                  {wishlists.length === 0 ? (
                    <div className="flex flex-col items-center mt-20">
                      <FaRegHeart className="text-7xl text-gray-400 mb-4" />
                      <p className="text-gray-600">No products in wishlist</p>
                      <button
                        onClick={closeSidebar}
                        className="mt-6 bg-[#E01B6F] text-white px-5 py-2 rounded-lg hover:bg-[#c2185b]"
                      >
                        Return to Shop
                      </button>
                    </div>
                  ) : (
                    <>
                      {wishlists.map((item) => (
                        <div key={item.id} className="flex gap-4 mb-6 p-3 rounded-lg bg-gray-100 relative">
                          <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                          <div>
                            <h3 className="text-md font-semibold">
                              {item.title.length > 10 ? item.title.substring(0, 12) + "..." : item.title}
                            </h3>
                            <p className="text-gray-600">Rs {item.price}</p>
                            <button
                              onClick={() => handleProductClick(item)}
                              className="bg-[#E01B6F] text-[12px] text-white px-3 py-1 rounded-md hover:bg-[#c2185b]"
                            >
                              View Product
                            </button>
                          </div>
                          <IoMdClose
                            className="absolute top-2 right-2 text-white bg-[#E01B6F] rounded-full p-1 cursor-pointer"
                            onClick={() => dispatch(removewishlist(item))}
                          />
                        </div>
                      ))}

                      <button
                        onClick={() => dispatch(clearwishlist())}
                        className="bg-[#E01B6F] text-white w-full py-2 rounded-lg hover:bg-[#c2185b]"
                      >
                        Clear All
                      </button>
                    </>
                  )}
                </>
              )}

              {/* Cart Section */}
              {sidebarType === "cart" && (
                <>
                  <h2 className="text-xl font-bold mb-4 text-[#E01B6F]">Your Cart</h2>

                  {addtocartlist.length === 0 ? (
                    <div className="flex flex-col items-center mt-20">
                      <RiShoppingCart2Line className="text-7xl text-gray-400 mb-4" />
                      <p className="text-gray-600">No products in cart</p>
                      <button
                        onClick={closeSidebar}
                        className="mt-6 bg-[#E01B6F] text-white px-5 py-2 rounded-lg hover:bg-[#c2185b]"
                      >
                        Return to Shop
                      </button>
                    </div>
                  ) : (
                    <>
                      {addtocartlist.map((item) => (
                        <div key={item.id} className="flex gap-4 mb-6 p-3 rounded-lg bg-gray-100 relative">
                          <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
                          <div>
                            <h3 className="text-md font-semibold">
                              {item?.title?.length > 10 ? item.title.substring(0, 12) + "..." : item.title}
                            </h3>
                            <p className="text-gray-600">Rs: {item?.price}</p>




                            {/* <p className="text-gray-600">Quantity: {item.quantity}</p> */}
                            <p className="text-md text-gray-700 mb-3">
                              <strong>Quantity:</strong>
                              <br />
                              <div className='flex gap-3 w-20 mt-2' style={{ backgroundColor: "#edededff" }}>
                                <FiMinus className='bg-[#e01b6f] text-white text-2xl p-1 rounded' onClick={() => handlequantity(item, "minus")} />
                                <span>{item.quantity}</span>
                                <FiPlus className='bg-[#e01b6f] text-white text-2xl p-1 rounded' onClick={() => handlequantity(item, "plus")} />
                              </div>
                            </p>









                            <button
                              onClick={() => handleProductClick(item)}
                              className="bg-[#E01B6F] text-[12px] mt-3 text-white px-3 py-1 rounded-md hover:bg-[#c2185b]"
                            >
                              View Product
                            </button>
                          </div>
                          <IoMdClose
                            className="absolute top-2 right-2 text-white bg-[#E01B6F] text-lg rounded-full p-1 cursor-pointer"
                            onClick={() => dispatch(removeaddtocart(item))}
                          />
                        </div>
                      ))}

                      <button
                        onClick={() => dispatch(clearaddtocartlists())}
                        className="bg-[#E01B6F] text-white w-full py-2 rounded-lg hover:bg-[#c2185b]"
                      >
                        Clear All
                      </button>
                      <div className='bottom-0 absolute w-70 '>
                        <hr />
                        <div className='flex gap-4 py-3'>
                          <h2 className='text-lg'>Subtotal:</h2>
                          <h3 className='text-lg'>Rs {subtotal.toFixed(2)}</h3>
                        </div>
                        <div className='flex gap-2 mb-2'>
                          <Link
                            to={"/view-cart"}
                            className="bg-[#E01B6F] text-white w-20 py-2 my-2 rounded-lg hover:bg-[#c2185b]"
                          >
                            View Cart
                          </Link>

                          <Link
                        to={"/checkout"}
                            className="bg-[#E01B6F] text-white w-20 py-2 my-2 rounded-lg hover:bg-[#c2185b]"
                          >
                            Checkout
                          </Link>

                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
