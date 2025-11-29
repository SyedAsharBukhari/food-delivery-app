import { configureStore } from "@reduxjs/toolkit";
import productslice from "../Store/slice/ProductSlice"


export const store = configureStore({
    reducer: {
       data: productslice,
    }
})