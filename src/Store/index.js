import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../Container/Job/slice'

export const store = configureStore({
  reducer: {
    jobsData: jobReducer
  },
});
