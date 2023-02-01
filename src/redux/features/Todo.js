import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { value: "Drop Shadow", checked: true },
      { value: "Drop Bass", checked: true },
      { value: "Drop Fizz Buzz", checked: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    updateTodo: (state, action) =>{
      state.value.
    }
  },
});

export const { addTodo } = userSlice.actions;
export default userSlice.reducer;
