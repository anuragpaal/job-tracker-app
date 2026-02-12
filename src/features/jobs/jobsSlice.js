import { createSlice } from "@reduxjs/toolkit";
import { fetchJobs, addJob, deleteJob } from "./jobsThunks";

const initialState = {
  list: [],
  loading: false,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(addJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.list = state.list.filter((job) => job.id !== action.payload);
      });
  },
});

export default jobsSlice.reducer;
