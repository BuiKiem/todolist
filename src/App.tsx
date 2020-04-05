import React from "react";
import { CssBaseline, StylesProvider } from "@material-ui/core";

import { OnGoingTodoList } from "./components/OnGoingTodoList/OnGoingTodoList";
import { CompletedTodoList } from "./components/CompleteTodoList/CompletedTodoList";

const todos: TTodo[] = [
  {
    text: "Write an app",
    complete: false,
  },
  {
    text: "Write an app 2",
    complete: false,
  },
  {
    text: "Push up",
    complete: true,
  },
  {
    text: "Push up 2",
    complete: true,
  },
];

function App() {
  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <h1>Todolist</h1>
      <OnGoingTodoList todos={onGoingTodos} />
      <CompletedTodoList todos={completedTodos} />
    </StylesProvider>
  );
}

export default App;
