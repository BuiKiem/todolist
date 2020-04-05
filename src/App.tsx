import React from "react";
import { CssBaseline } from "@material-ui/core";
import { TodoItem } from "./components/TodoItem/TodoItem";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todolist</h1>
      <TodoItem />
    </>
  );
}

export default App;
