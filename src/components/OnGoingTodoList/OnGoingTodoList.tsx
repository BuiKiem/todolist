import React from "react";
import { useDispatch } from "react-redux";

import { TodoItem } from "../TodoItem/TodoItem";
import { List } from "@material-ui/core";

import { toggleTask } from "../../reducers/todos";

interface IProps {
  todos: TTodo[];
}

export const OnGoingTodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.text}
          todo={todo}
          toggleTask={() => dispatch(toggleTask(todo.text))}
        />
      ))}
    </List>
  );
};
