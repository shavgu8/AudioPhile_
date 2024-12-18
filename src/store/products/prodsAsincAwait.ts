import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/axios";
import { useParams } from "react-router-dom";
const FetchingProducts = createAsyncThunk('FetchingProducts/products',async(id,ThunkAPI)=>{
   
      try {
                const res = await api(`/products`)
                const data  = (await res).data
                return data
      } catch (error) {
            if(error instanceof Error){
                ThunkAPI.rejectWithValue('failed')
            }else if(error === String){
                ThunkAPI.rejectWithValue('failed')
            }else{
                ThunkAPI.rejectWithValue('failed')
            }
      }
})
export default FetchingProducts