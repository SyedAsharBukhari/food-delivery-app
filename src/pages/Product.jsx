import React, { useEffect, useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchproducts } from '../services/ProductServices'
import { IoMdClose } from 'react-icons/io'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { addtocart } from '../Store/slice/ProductSlice'

const Product = () => {
    const [activebtn, setactivebtn] = useState("Additional")
    const [quantities, setquantities] = useState(1)
    const [images, setimages] = useState("")
    console.log("activebtn ", activebtn)
    const { products, wishlists, addtocartlist } = useSelector((state) => state.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchproducts())
    }, [])

    // console.log("wishlists ===> ?", products)
    const { id } = useParams();
    const finaldata = parseInt(id);
    console.log("????", typeof finaldata)

    const finals = products?.find((items) => items.id === finaldata);
    console.log("finals", finals)
    const items = { ...finals, quantity: quantities }
    // console.log("data data-----", items)

    const handlequantity = (data) => {
        if (data === "minus") {
            const substract = quantities > 1 ? quantities - 1 : quantities;
            setquantities(substract)
        } else {
            setquantities(quantities + 1)
        }
    }

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





const handleaddtocarts = (cartitems) => {
dispatch(addtocart(cartitems))
console.log("dsfjskajfksjak")
}



    return (
        <div>
            {items && <>
                <div key={items.id} className='p-5 pb-10 flex gap-4 relative  w-full' style={{ backgroundColor: "#edededff" }}>
                    <div className='flex flex-col gap-8 p-2 w-40  items-center '>
                        {items?.images?.map((item) => <img src={item} className='w-[100px] object-cover rounded border p-3 bg-white' onClick={() => setimages(item)} />)}
                    </div>
                    <div className='bg-white rounded-[13px]'>
                        <img src={images || items.thumbnail} className='w-[500px] object-cover rounded'
                        />
                    </div>


                    <div className='p-8 bg-white w-[800px]  rounded-[13px]'>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{items.title}</h1>
                        <p className="text-gray-600 mb-4">{items.description}</p>

                        <p className="text-md text-gray-700">
                            <strong>Brand:</strong> <br />{items.brand}
                        </p>
                        <p className="text-md text-gray-700">
                            <strong>Category:</strong> <br /> {items.category}
                        </p>
                        <p className="text-md text-gray-700">
                            <strong>Availability:</strong>{" "}
                            <br />
                            <span
                                className={`${items.availabilityStatus === "In Stock"
                                    ? "text-green-600"
                                    : "text-red-500"
                                    }`}
                            >
                                {items.availabilityStatus}
                            </span>
                        </p>


                        <p className="text-md text-gray-700 mb-3">
                            <strong>Quantity:</strong>
                            <br />
                            <div className='flex gap-3 w-20 mt-2' style={{ backgroundColor: "#edededff" }}>
                                <FiMinus className='bg-[#e01b6f] text-white text-2xl p-1 rounded' onClick={() => handlequantity("minus")} />
                                <span>{quantities}</span>
                                <FiPlus className='bg-[#e01b6f] text-white text-2xl p-1 rounded' onClick={() => handlequantity("plus")} />
                            </div>
                        </p>

                        <div className="text-2xl font-bold text-[#E01B6F] mb-4">
                            Rs {items.price}
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => handleaddtocarts(items)} className="bg-[#E01B6F] text-white px-6 py-2 rounded-lg hover:bg-[#c2185b] transition-all">
                                Add to Cart
                            </button>
                            <button className="border border-[#E01B6F] text-[#E01B6F] px-6 py-2 rounded-lg hover:bg-[#E01B6F] hover:text-white transition-all">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>






















                {/* ---- Additional Info ---- */}
                <div className='bg-white border-y  p-5 mb-4'>
                    <div className='mx-10 flex gap-4'>
                        <button onClick={() => setactivebtn("Additional")} className={`p-4 border-2 rounded-full  font-[600] transition duration-700  hover:bg-[#E01B6F] hover:text-white ${activebtn === "Additional" ? "text-white bg-[#E01B6F]" : "text-black bg-white"}`}>Additional Info</button>
                        <button onClick={() => setactivebtn("Reviews")} className={`p-4 border-2 rounded-full px-8 font-[600] transition duration-700  hover:bg-[#E01B6F] hover:text-white ${activebtn === "Reviews" ? "text-white bg-[#E01B6F]" : "text-black bg-white"}`}>Reviews</button>
                    </div>
                </div>

                {activebtn === "Additional" && <>
                    <div className="bg-white  p-6 rounded-2xl shadow">
                        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                            <p><strong>Weight:</strong> {items.weight}g</p>
                            <p><strong>Stock:</strong> {items.stock}</p>
                            <p><strong>Warranty:</strong> {items.warrantyInformation}</p>
                            <p><strong>Return Policy:</strong> {items.returnPolicy}</p>
                            <p><strong>Shipping:</strong> {items.shippingInformation}</p>
                        </div>
                    </div>
                </>}

                {/* ---- Reviews Section ---- */}
                {activebtn === "Reviews" && <>
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
                        {items.reviews?.length > 0 ? (
                            items.reviews.map((review, index) => (
                                <div key={index} className="border-b border-gray-200 py-3">
                                    <p className="text-lg font-medium text-gray-800">{review.reviewerName}</p>
                                    <p className="text-sm text-gray-500">Rating: {review.rating}⭐</p>
                                    <p className="text-gray-600 mt-1">{review.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}
                    </div>
                </>
                }


            </>
            }

        </div>

    )
}

export default Product


