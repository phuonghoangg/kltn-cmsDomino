import {createSlice} from '@reduxjs/toolkit'


const BillSlice = createSlice({
    name:'bill',
    initialState:{
        bills:{
                allBills:null,
                isFetching:false,
                error:false,
        },
        totalDashboard:{
            isFetching:false,
            error:false,
            total:null,
        }
    },
    reducers:{
       getTotalDashboardStart: (state)=>{
        state.totalDashboard.isFetching = true
       },
       getTotalDashboardSuccess: (state,action)=>{
        state.totalDashboard.isFetching = false
        state.totalDashboard.total = action.payload
       },
       getTotalDashboardFail: (state)=>{
        state.totalDashboard.error = false
       },

    }
})

export const {getTotalDashboardStart,getTotalDashboardSuccess,getTotalDashboardFail}  =  BillSlice.actions
export default BillSlice.reducer