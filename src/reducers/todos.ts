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
    toggleTask: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.text === action.payload);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

export const { addTask, toggleTask } = todosSlice.actions;

export default todosSlice.reducer;
