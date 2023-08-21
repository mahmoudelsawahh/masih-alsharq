import { configureStore } from "@reduxjs/toolkit";
import jobsData from "./jobsData";
const store = configureStore({
    reducer:{
      jobsData
    }
})

export default store;
export const AppData = store.getState