import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchJobsAPI,addJobAPI,deleteJobAPI } from "./jobsApi";

export const fetchJobs = createAsyncThunk(
    "jobs/fetchJobs",
    async () => {
        const res = await fetchJobsAPI();
        return res.data.slice(0,10);
    }
)

export const addJob = createAsyncThunk(
    "jobs/add",
    async (job) => {
        const res = await addJobAPI(job)
        return res.data;
    }
)

export const deleteJob = createAsyncThunk(
    "jobs/delete",
    async (id) => {
        await deleteJobAPI(id);
        return id;
    }
)