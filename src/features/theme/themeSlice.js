import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";

      // save to localStorage
      localStorage.setItem("theme", state.mode);

      // apply to html
      document.documentElement.classList.toggle("dark", state.mode === "dark");
    },
  },
});

export const { toggleTheme } = slice.actions;

export default slice.reducer;
