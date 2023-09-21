import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    setCountAddCounter: (state, action) => {
      state.count = state.count + 1;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
