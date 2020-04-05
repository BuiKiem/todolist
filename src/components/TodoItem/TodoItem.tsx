import React from "react";
import { ListItem, Radio, Typography } from "@material-ui/core";

interface IProps {
  todo: TTodo;
}

export const TodoItem: React.FC<IProps> = ({ todo }) => {
  return (
    <ListItem divider>
      <Radio checked={todo.complete} />
      <Typography variant="body1" component="span">
        {todo.text}
      </Typography>
    </ListItem>
  );
};
