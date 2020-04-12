import React from "react";
import { CssBaseline, StylesProvider } from "@material-ui/core";
import { useSelector } from "react-redux";

import { OnGoingTodoList } from "./components/OnGoingTodoList/OnGoingTodoList";
import { AppBar } from "./components/AppBar/AppBar";

import { RootState } from "./reducers";

function App() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <h1>Todolist</h1>
      <OnGoingTodoList todos={todos} />
      <AppBar />
    </StylesProvider>
  );
}

export default App;
