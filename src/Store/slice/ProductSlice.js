import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../utils/AsyncStatus";
import { fetchproducts } from "../../services/ProductServices";

const  initialState =  {
    product_status: asyncStatus.IDLE,
    products: [],
    subtotal: 0,
    product_error: asyncStatus.IDLE,
    wishlists: JSON.parse(localStorage.getItem("wishlists")) || [],
    addtocartlist: JSON.parse(localStorage.getItem("addtocartlist")) || [],
    // shipping: 0,
    // discount: 0,
    // total: 0,
    shipping: JSON.parse(localStorage.getItem("shipping")) || 0,
  discount: JSON.parse(localStorage.getItem("discount")) || 0,
  total: JSON.parse(localStorage.getItem("total")) || 0,
    promocodes: false,
 }


const productslice = createSlice({
 name: "productsSlices",
initialState,
reducers: {
  wishlistdata: (state, {payload}) =>{
    const existwishlist = state.wishlists?.find((items) => items?.id === payload?.id);
    if(!existwishlist){
   state.wishlists.push(payload);
    }else {
      state.wishlists = state.wishlists.filter((items) => items.id !== payload.id)
}
      localStorage.setItem("wishlists", JSON.stringify(state.wishlists));
  },
   removewishlist: (state, {payload}) => {
    state.wishlists = state.wishlists.filter((items) => items.id !== payload.id)
    localStorage.setItem("wishlists", JSON.stringify(state.wishlists));
  },
  addtocart: (state, {payload}) =>{
    console.log("payload payload", payload);
    const existitem = state.addtocartlist?.find((items) => items?.id === payload?.id);
    // console.log("existwishlist testtt items quantity", existwishlist.quantity)
    console.log("payload.quantity payload.quantity", payload.quantity)
    console.log("existitem.quantity ", existitem?.quantity)
    if(!existitem){
   state.addtocartlist.push(payload);
   console.log("push nh ho rhi", payload)
    }else if(payload.quantity > 1){
existitem.quantity += payload.quantity;
    }else {
  existitem.quantity += 1;
}
      localStorage.setItem("addtocartlist", JSON.stringify(state.addtocartlist));
  },


        changequantity: (state, { payload }) => {
            const index = state.addtocartlist.findIndex((item) => item.id === payload.id);
            if (index !== -1) {
                state.addtocartlist[index] = payload;
            }
            localStorage.setItem("addtocartlist", JSON.stringify(state.addtocartlist));
            
            // Recalculate subtotal after quantity change
            // state.subtotal = state.addtocartlist.reduce((acc, item) => {
            //     return acc + item.price * item.quantity;
            // }, 0);
        },

  removeaddtocart: (state, {payload}) => {
    state.addtocartlist = state.addtocartlist.filter((items) => items.id !== payload.id)
    localStorage.setItem("addtocartlist", JSON.stringify(state.addtocartlist));
    window.location.reload();
  },
  clearaddtocartlists: () => {
        localStorage.removeItem("addtocartlist");
        window.location.reload()
  },
  clearwishlist: () => {
        localStorage.removeItem("wishlists");
        window.location.reload()
  },
subtotals: (state) => {
  state.subtotal = state?.addtocartlist?.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  },
totalamount: (state) => {
state.total = state.subtotal + state.shipping - state.discount;
  localStorage.setItem("total", JSON.stringify(state.total));

},
shippingcharges: (state) => {
  if(state.subtotal > 10000){
    state.shipping = 0;
  }else{
   state.shipping = 5;
  }
    localStorage.setItem("shipping", JSON.stringify(state.shipping));

},
coupcode: (state, { payload }) => {
  console.log("payload discount", payload);

if(state.promocodes){
    alert("Promo code already used!");
return;
}

  if (payload === "Bukhari") {
    // ✅ 5% discount
    const discount = state.total * 0.05;  
    state.discount = discount;  // store the discount
    state.total = state.total - discount;  // update total after discount
    state.promocodes = true;
  } else {
    // ✅ agar promo code galat ho
        alert("Invalid promo code!");
    state.discount = 0;
  }
    localStorage.setItem("discount", JSON.stringify(state.discount));
  localStorage.setItem("total", JSON.stringify(state.total));

},

},
extraReducers: (builder) => {
    builder.addCase(fetchproducts.pending, (state)=>{
      state.product_status = asyncStatus.LOADING;
    })
    builder.addCase(fetchproducts.fulfilled, (state, action)=>{
      state.product_status = asyncStatus.SUCCEEDED;
      state.products = action.payload.map(items => ({...items, quantity: 1}))
    }),
    builder.addCase(fetchproducts.rejected, (state, action)=>{
      state.product_status = asyncStatus.ERROR;
      state.product_error = action.payload;
    })
}
    
})

export const {
  wishlistdata,
  removewishlist,
  addtocart,
  removeaddtocart,
  clearwishlist,
  clearaddtocartlists,
  subtotals,
  changequantity,
  totalamount,
  coupcode,
  shippingcharges,

} = productslice.actions;
export default productslice.reducer;
