import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  Typography,
} from "@material-ui/core";
import { TodoItem } from "../TodoItem/TodoItem";

interface IProps {
  onGoingTodos: TTodo[];
  completedTodos: TTodo[];
}

export const OnGoingState: React.FC<IProps> = ({
  onGoingTodos,
  completedTodos,
}) => {
  return (
    <>
      <List>
        {onGoingTodos.map((todo) => (
          <TodoItem key={todo.text} todo={todo} />
        ))}
      </List>
      {completedTodos.length > 0 && (
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography variant="subtitle1">
              Completed ({completedTodos.length})
            </Typography>
          </ExpansionPanelSummary>
          <List>
            {completedTodos.map((todo) => (
              <TodoItem key={todo.text} todo={todo} />
            ))}
          </List>
        </ExpansionPanel>
      )}
    </>
  );
};
