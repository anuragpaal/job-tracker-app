import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import jobsReducer from "../features/jobs/jobsSlice";
import candidatesReducer from "../features/candidates/candidateSlice";
import applicationsReducer from "../features/applications/applicationsSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
    candidates: candidatesReducer,
    applications: applicationsReducer,
    theme: themeReducer,
  },
});
