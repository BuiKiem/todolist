import React from "react";

import { OnGoingTodoList } from "./OnGoingTodoList";

export default {
  component: OnGoingTodoList,
  title: "OnGoingTodoList",
  excludeStories: /.*Data$/,
};

export const TodosData: TTodo[] = [
  {
    text: "Task 1",
    complete: false,
  },
  {
    text: "Task 2",
    complete: false,
  },
  {
    text: "Task 3",
    complete: false,
  },
];

export const Default = () => <OnGoingTodoList todos={TodosData} />;
