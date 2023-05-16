import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import baseFormReducer from "./features/forms/baseForm";
import formReducer from "./features/forms/form";
import { reducer as reduxFormReducer } from "redux-form";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    baseForms: baseFormReducer,
    // form: formReducer,
    form: reduxFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
