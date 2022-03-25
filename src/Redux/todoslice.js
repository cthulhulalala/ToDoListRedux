import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todoList = [action.payload, ...state.todoList];
    }
  }
});

// Action creators are generated for each case reducer function
export const { add } = todoSlice.actions;

export default todoSlice.reducer;
