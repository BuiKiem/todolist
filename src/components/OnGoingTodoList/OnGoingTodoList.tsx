import React from "react";
import { useDispatch } from "react-redux";

import { TodoItem } from "../TodoItem/TodoItem";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  Typography,
} from "@material-ui/core";

import { toggleTask } from "../../reducers/todos";

interface IProps {
  todos: TTodo[];
}

export const OnGoingTodoList: React.FC<IProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const onGoingTodos = todos.filter((todo) => !todo.complete);
  const completedTodos = todos.filter((todo) => todo.complete);

  return (
    <div>
      <List>
        {onGoingTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            todo={todo}
            toggleTask={() => dispatch(toggleTask(todo.text))}
          />
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
              <TodoItem
                key={todo.text}
                todo={todo}
                toggleTask={() => dispatch(toggleTask(todo.text))}
              />
            ))}
          </List>
        </ExpansionPanel>
      )}
    </div>
  );
};
