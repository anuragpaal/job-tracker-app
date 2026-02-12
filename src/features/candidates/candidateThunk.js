import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCandidatesAPI } from "./candidateApi";

export const fetchCandidates = createAsyncThunk(
  "candidates/fetch",
  async () => {
    const res = await fetchCandidatesAPI();
    return res.data;
  },
);
