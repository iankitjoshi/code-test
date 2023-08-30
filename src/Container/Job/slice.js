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

            .addCase(createJob.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createJob.fulfilled, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(createJob.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })

            .addCase(deleteJob.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteJob.fulfilled, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(deleteJob.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })

            .addCase(editJob.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editJob.fulfilled, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(editJob.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.errors = payload;
            })
    },
});

export default jobSlice.reducer;

export const getAllJobs = createAsyncThunk(
    "job/getAllJobs",
    async (thunkAPI) => {
        try {
            const response = await api.get(jobApi.job);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const createJob = createAsyncThunk(
    "job/createJob",
    async (jobData, thunkAPI) => {
        try {
            const response = await api.post(jobApi.job, jobData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);


export const deleteJob = createAsyncThunk(
    "job/deleteJob",
    async (id, thunkAPI) => {
        try {
            const response = await api.delete(`${jobApi.job}/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);

export const editJob = createAsyncThunk(
    "job/editJob",
    async (jobData, thunkAPI) => {
        try {
            const response = await api.put(`${jobApi.job}/${jobData?.id}`, jobData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
);