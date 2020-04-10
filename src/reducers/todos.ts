import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TTodo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskFormData>) => {
      const { text } = action.payload;
      state.push({ text, complete: false });
    },
  },
});

export const { addTask } = todosSlice.actions;

export default todosSlice.reducer;
