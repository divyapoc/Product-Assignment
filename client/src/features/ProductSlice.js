import {createSlice} from "@reduxjs/toolkit"
import {fetchproducts} from "./ProductAction"
const getproduct = localStorage.getItem('products')
const initialState = {
    loading:false,
    error:null,
    products: getproduct?JSON.parse(getproduct):[]
}

const productSlice  = createSlice({
    name:"product",
    initialState,
    extraReducers:(builder) =>{
    builder
    .addCase(fetchproducts.pending, (state)=>{
      state.error = null ;
      state.loading = true;  
    })
    .addCase(fetchproducts.fulfilled , (state,action) =>{
        state.error = null;
        state.loading = false  ;
        state.products = action.payload.result
    })
    .addCase(fetchproducts.rejected , (state,action) =>{
        state.error = action.payload;
        state.loading = false  ;
    })
    }
})

export default productSlice.reducer