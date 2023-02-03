import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { value: "Drop Shadow" },
      { value: "Drop Bass" },
      { value: "Drop Fizz Buzz" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((item, index) => {
        return index !== action.payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = userSlice.actions;
export default userSlice.reducer;
