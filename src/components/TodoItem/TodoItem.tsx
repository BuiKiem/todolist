import React from "react";
import { ListItem, Radio, Typography } from "@material-ui/core";

interface IProps {
  todo: TTodo;
  toggleTask: () => void;
}

export const TodoItem: React.FC<IProps> = ({ todo, toggleTask }) => {
  return (
    <ListItem divider>
      <Radio checked={todo.complete} onClick={toggleTask} />
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
