import { createSlice } from "@reduxjs/toolkit";
import { fetchCandidates } from "./candidateThunk";

const initialState = {
  list: [],
  loading: false,
};

const slice = createSlice({
  name: "candidates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCandidates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCandidates.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default slice.reducer;
