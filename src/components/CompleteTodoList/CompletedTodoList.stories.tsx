import React from "react";

import { CompletedTodoList } from "./CompletedTodoList";

export default {
  component: CompletedTodoList,
  title: "CompletedTodoList",
  excludeStories: /.*Data$/,
};

export const TodosData: TTodo[] = [
  {
    text: "Task 1",
    complete: true,
  },
  {
    text: "Task 2",
    complete: true,
  },
  {
    text: "Task 3",
    complete: true,
  },
];

export const Default = () => <CompletedTodoList todos={TodosData} />;
