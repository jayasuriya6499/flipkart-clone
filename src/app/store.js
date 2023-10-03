import {configureStore} from "@reduxjs/toolkit";
import  useReducer  from "../slices/userSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
    reducer: {
        userData : useReducer,
        cartData: cartReducer,
    }
});