import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishListSlice from "./wishListSlice";
import productsSlice from "./productSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice,
        wishList: wishListSlice,
        productsSlice
    } 
})