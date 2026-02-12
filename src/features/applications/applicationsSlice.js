import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  columns: {
   applied: [
   {id:1,name:"Rahul Sharma"},
   {id:2,name:"Anita Verma"},
   {id:3,name:"Anurag Pal"},
   {id:4,name:"Vivek Gupta"}
  ],
    screening: [],
    interview: [],
    hired: [],
  },
};

const slice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.columns.applied.push(action.payload);
    },
    moveCandidate: (state, action) => {
      const { from, to, candidate } = action.payload;

      state.columns[from] = state.columns[from].filter(
        (c) => c.id !== candidate.id,
      );

      state.columns[to].push(candidate);
    },
  },
});

export const { addCandidate, moveCandidate } = slice.actions;

export default slice.reducer;
