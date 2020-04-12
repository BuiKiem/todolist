import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TTodo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTaskFormData>) => {
      const { text } = action.payload;
      state.push({ text, complete: false });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.text === action.payload);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
