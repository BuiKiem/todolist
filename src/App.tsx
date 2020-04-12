import React from "react";
import { CssBaseline, StylesProvider } from "@material-ui/core";
import { useSelector } from "react-redux";

import { TodoList } from "./components/TodoList/TodoList";
import { AppBar } from "./components/AppBar/AppBar";

import { RootState } from "./reducers";

function App() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <h1>Todolist</h1>
      <TodoList todos={todos} />
      <AppBar />
    </StylesProvider>
  );
}

export default App;
