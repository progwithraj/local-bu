import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    values: {},
  },
  reducers: {
    updateFormValues(state, action) {
      state.values = action.payload;
    },
  },
});

export const { updateFormValues } = formSlice.actions;

export default formSlice.reducer;
