import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, Radio, Typography } from "@material-ui/core";

import { toggleTodo } from "../../reducers/todos";

interface IProps {
  todo: TTodo;
}

export const TodoItem: React.FC<IProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = () => dispatch(toggleTodo(todo.text));

  return (
    <ListItem divider>
      <Radio checked={todo.complete} onClick={toggleTodoHandler} />
      <Typography
        className={todo.complete ? "line-through" : undefined}
        variant="body1"
        component="span"
      >
        {todo.text}
      </Typography>
    </ListItem>
  );
};
