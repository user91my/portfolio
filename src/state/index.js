import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

// `createSlice` returns an object with two keys:-
// -- 'actions' : action creators used to dispatch actions
// -- 'reducer' : represents the store's reducer function
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
