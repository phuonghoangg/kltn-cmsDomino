import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name:'product',
    initialState:{
        products:{
                allProduct:null,
                isFetching:false,
                error:false,
        }
    },
    reducers:{
        getAllProductStart:(state)=>{
            state.products.isFetching=true
        },
        getAllProductSuccess:(state,action)=>{
            state.products.isFetching=false
            state.products.allProduct = action.payload
        },
        getAllProductFail: (state)=>{
            state.products.error = true
        }
    }
})

export const {getAllProductFail,getAllProductStart,getAllProductSuccess}  =  productSlice.actions
export default productSlice.reducer