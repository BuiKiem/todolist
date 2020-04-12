import React from "react";

import { TodoList } from "./TodoList";

export default {
  component: TodoList,
  title: "TodoList",
  excludeStories: /.*Data$/,
};

export const TodosData: TTodo[] = [
  {
    text: "Task 1",
    complete: false,
  },
  {
    text: "Task 2",
    complete: true,
  },
  {
    text: "Task 3",
    complete: false,
  },
  {
    text: "Task 4",
    complete: true,
  },
];

export const Default = () => <TodoList todos={TodosData} />;
