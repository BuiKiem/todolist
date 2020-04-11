import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { TodoItem } from "../TodoItem/TodoItem";

import { toggleTask } from "../../reducers/todos";

interface IProps {
  todos: TTodo[];
}

export const CompletedTodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography variant="subtitle1">Completed ({todos.length})</Typography>
      </ExpansionPanelSummary>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleTask={() => dispatch(toggleTask(todo.text))}
          />
        ))}
      </List>
    </ExpansionPanel>
  );
};
