import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TTodo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      const { text } = action.payload;
      state.push({ text, complete: false });
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
