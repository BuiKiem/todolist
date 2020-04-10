import React from "react";
import { CssBaseline, StylesProvider } from "@material-ui/core";
import { useSelector } from "react-redux";

import { OnGoingTodoList } from "./components/OnGoingTodoList/OnGoingTodoList";
import { CompletedTodoList } from "./components/CompleteTodoList/CompletedTodoList";
import { AppBar } from "./components/AppBar/AppBar";
import { RootState } from "./reducers";

function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <h1>Todolist</h1>
      <OnGoingTodoList todos={onGoingTodos} />
      <CompletedTodoList todos={completedTodos} />
      <AppBar />
    </StylesProvider>
  );
}

export default App;
