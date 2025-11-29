import axios from "axios";

export const BASE_URL = "https://dummyjson.com/";


export const API_Handle = axios.create({
    baseURL: BASE_URL
}) 







// API_Handle.interceptor.request.use((config) => {
//     const token = localStorage.getItem("token");
//     if(token){
//         config.headers["authorization"] = `Bearer ${token}`
//     }
//     return config;
// },(error) =>{
//    return Promise.reject(error)
// }
// )
