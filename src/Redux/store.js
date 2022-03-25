import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/todoslice";

export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
});
