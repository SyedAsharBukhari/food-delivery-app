import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_Handle } from "../config/ApiHandle";
import { type_Constant } from "../utils/AsyncStatus";


export const fetchproducts = createAsyncThunk(type_Constant.PRODUCTS, async (_, {rejectwithvalue}) => {
        try {
            const response = await API_Handle.get("products");
            const res = response?.data?.products;
            console.log("response=== ", res)      
            return res; 
        } catch (error) {
            console.log(error)
            return rejectwithvalue(error.response.data || "fetching error")
        }
    }
)