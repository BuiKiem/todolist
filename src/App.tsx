import React from "react";
import { CssBaseline } from "@material-ui/core";

import { OnGoingTodoList } from "./components/OnGoingTodoList/OnGoingTodoList";
import { CompletedTodoList } from "./components/CompleteTodoList/CompletedTodoList";

const todos: TTodo[] = [
  {
    text: "Write an app",
    complete: false,
  },
  {
    text: "Push up",
    complete: true,
  },
];

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todolist</h1>
      <OnGoingTodoList todos={todos} />
      <CompletedTodoList todos={todos} />
    </>
  );
}

export default App;
