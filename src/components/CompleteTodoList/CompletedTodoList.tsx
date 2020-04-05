import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List,
  Typography,
} from "@material-ui/core";

interface IProps {
  todos: TTodo[];
}

export const CompletedTodoList: React.FC<IProps> = ({ todos }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography variant="subtitle1">Completed ({todos.length})</Typography>
      </ExpansionPanelSummary>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </List>
    </ExpansionPanel>
  );
};
