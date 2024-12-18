import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../type/type";
import FetchingProduct from "./productAsincAwait";
type initialstate = {
    data:products[],
    status:'idle' | 'loading' | 'loaded' | 'failed',
    error:string | undefined
}
const initialState:initialstate = {
   data:[],
   status:'idle',
   error:undefined
}


const ProductReducer = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(FetchingProduct.pending,(state)=>{
            state.status = 'loading'
        })
        builder.addCase(FetchingProduct.fulfilled,(state,action)=>{
            state.status = 'loaded',
            state.data = action.payload
        })
        builder.addCase(FetchingProduct.rejected,(state,action)=>{
            state.status = 'failed',
            state.error = action.error.message
            
        })
    },
})
 export default  ProductReducer.reducer
 