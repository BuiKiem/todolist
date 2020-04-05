import React from "react";
import { ListItem, Radio, Typography } from "@material-ui/core";

export const TodoItem = () => {
  return (
    <ListItem divider>
      <Radio />
      <Typography variant="body1" component="span">
        Task text
      </Typography>
    </ListItem>
  );
};
