import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './product/productSlide'
import productsReducer from './products/prodsSlice'
const store = configureStore({
    reducer:{
        prod:ProductReducer,
        prods:productsReducer
    }
})
export  default store
   