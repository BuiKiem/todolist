import React from "react";

import { TodoItem } from "./TodoItem";

export default {
  component: TodoItem,
  title: "TodoItem",
  excludeStories: /.*Data$/,
};

export const todoData: TTodo = {
  text: "Todo 1",
  complete: false,
};

export const OnGoing = () => <TodoItem todo={{ ...todoData }} />;

export const Completed = () => (
  <TodoItem todo={{ ...todoData, complete: true }} />
);
