import { configureStore } from "@reduxjs/toolkit";
import { checkoutProductsReducer } from "./Slices/ProductSlice";
import { addToBasket,removeFromBasket } from "./Slices/ProductSlice";

const store=configureStore({
    reducer:{
        products:checkoutProductsReducer
    }
})
export {store,addToBasket,removeFromBasket};