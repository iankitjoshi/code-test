import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/config";
import { jobApi } from "./api";


const initialState = {
    isLoading: false,
    jobs: [],
    errors: "",

};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllJobs.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.jobs = payload;
            })
            .addCase(getAllJobs.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
    },
});

export default jobSlice.reducer;

export const getAllJobs = createAsyncThunk(
    "job/getAllJobs",
    async () => {
        try {
            const response = await api.get(jobApi.job);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);