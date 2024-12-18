import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../type/type";
import FetchingProducts from "./prodsAsincAwait";


type initialstate = {
    data:products[],
    status:'idle' | 'loading' | 'loaded' | 'failed',
    error: string | undefined
}

const initialState:initialstate = {
    data:[],
    status:'idle',
    error:undefined
}

const ProductsReducer = createSlice({
    name:"products",
    reducers:{},
    initialState,
    extraReducers(builder) {
        builder.addCase(FetchingProducts.pending,(state)=>{
                state.status = 'loading'
        })
        builder.addCase(FetchingProducts.fulfilled,(state,action)=>{
            state.status = 'loaded'
            state.data = action.payload
    })
    builder.addCase(FetchingProducts.rejected,(state,action)=>{
        state.status = 'failed'
        state.error = action.error.message
})
    },
})
export default ProductsReducer.reducer