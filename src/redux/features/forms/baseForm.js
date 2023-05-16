import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dirty: false,
};
export const myFormSlice = createSlice({
  name: "baseForm",
  initialState: {},
  reducers: {
    updateBaseForm: (state, action) => {
      state[action.payload.form] = action.payload.state;
    },
    // updateFormState: (state, action) => {
    //   state[action.payload.form.]
    // }
  },
});

export const { updateBaseForm } = myFormSlice.actions;

export const selectForm = (state, form) => {
  return (state && state.myForm && state.myForm[form]) || {};
};

export const getFormData = (state, form) => {
  return selectForm(state, form);
};
export default myFormSlice.reducer;
