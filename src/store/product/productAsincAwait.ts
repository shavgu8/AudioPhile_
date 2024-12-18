import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axios";

const FetchingProduct = createAsyncThunk('product/FetchingProduct',async(_,thunkApi)=>{

        try {
            const res = await api.get('/products')
            return await res.data
        } catch (error) {
          if(error instanceof Error){
            thunkApi.rejectWithValue('failed')
          }else if(error === 'string'){
              thunkApi.rejectWithValue('failed')
          }else{
            thunkApi.rejectWithValue('failed')
          }
        }
    
})
export default FetchingProduct