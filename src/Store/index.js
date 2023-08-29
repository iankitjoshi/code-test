import { configureStore } from "@reduxjs/toolkit";
import jobs from '../Container/Job/slice'

export const store = configureStore({
  reducer: {
    jobs
  },
});
