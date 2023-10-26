import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/addToCart"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})