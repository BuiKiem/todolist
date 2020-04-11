import React from "react";
import { action } from "@storybook/addon-actions";

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

export const actionData = {
  toggleTask: action("TOGGLE_TASK"),
};

export const OnGoing = () => (
  <TodoItem todo={{ ...todoData }} {...actionData} />
);

export const Completed = () => (
  <TodoItem todo={{ ...todoData, complete: true }} {...actionData} />
);
