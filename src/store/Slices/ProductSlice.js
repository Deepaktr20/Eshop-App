import { createSlice } from "@reduxjs/toolkit";

const checkoutProducts=createSlice({
    name:"product",
    initialState:{
        basket:[]
    },
    reducers:{
        addToBasket(state,action){
            state.basket.push(action.payload);
        },
        removeFromBasket(state,action){
            const updated=state.basket.filter((item)=>{
                return item.id!==action.payload
            })
            state.basket=updated
        }
    }
})
export const {addToBasket,removeFromBasket}=checkoutProducts.actions;
export const checkoutProductsReducer=checkoutProducts.reducer;