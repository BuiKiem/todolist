import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

interface IProps {
  todos: TTodo[];
}

export const OnGoingTodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.text} todo={todo} />
      ))}
    </List>
  );
};
