import { createSlice } from '@reduxjs/toolkit'
export const jobsData = createSlice({
  name: 'data',
  initialState : {
    CategoryData : null,
    AllJobs : null,
    totalJobs : 0
  },
  reducers: {
    getJobs: (state , action) => {
      state.CategoryData = action.payload
    },
    getAllItems : (state , action)=>{
      state.AllJobs = action.payload
    },
    getTotalJobs : (state , action) => {
      state.totalJobs = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getJobs , getAllItems , getTotalJobs} = jobsData.actions

export default jobsData.reducer